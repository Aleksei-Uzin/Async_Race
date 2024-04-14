import { useContext, useRef, useState } from 'react'
import { deleteCar, getCars, startEngine, stopEngine } from '../../../api'
import { List, PaginationContext } from '../../../components'
import { IconGear } from '../../../icons'
import styles from './garageCarItem.module.css'
import { GarageCarMenuProps } from './types'

export const GarageCarMenu = ({
  carId,
  content,
  currentElement,
  openModal,
  width,
}: GarageCarMenuProps) => {
  const { pagination, setPagination } = useContext(PaginationContext)
  const [animationStatus, setAnimationStatus] = useState('pending')
  const { currentPage } = pagination
  const animation = useRef<Animation>(null)

  const handleStart = () => {
    setAnimationStatus('started')
    startEngine(carId).then(({ distance, velocity }) => {
      const duration = distance / velocity
      const iconKeyframes = new KeyframeEffect(
        currentElement,
        [{ transform: `translateX(${width}px)` }],
        { easing: 'ease-in', fill: 'forwards', duration }
      )

      animation.current = new Animation(iconKeyframes)
      animation.current.play()
      animation.current.onfinish = () => setAnimationStatus('finish')
    })
  }

  const handleStopEngine = () => {
    if (animation.current) {
      animation.current.cancel()
      setAnimationStatus('pending')
      stopEngine(carId)
    }
  }

  const removeCar = () => {
    deleteCar(carId)
      .then(() => getCars({ page: currentPage }))
      .then(response => setPagination(response))
  }

  const isStartButtonDisabled =
    animationStatus === 'started' || animationStatus === 'finish'
  const isResetButtonDisabled = animationStatus === 'pending'

  return (
    <div className={styles.carMenu}>
      <List>
        <List.Button
          size="tiny"
          disabled={isStartButtonDisabled}
          onClick={handleStart}
        >
          Start
        </List.Button>
        <List.Button
          color="purple"
          disabled={isResetButtonDisabled}
          size="tiny"
          onClick={handleStopEngine}
        >
          Reset
        </List.Button>
        <List.Button color="alert" size="tiny" onClick={removeCar}>
          Remove
        </List.Button>
        <List.Button
          className={styles.carConfig}
          size="tiny"
          onClick={openModal}
        >
          <IconGear />
        </List.Button>
      </List>
      <div className={styles.carName}>{content}</div>
    </div>
  )
}
