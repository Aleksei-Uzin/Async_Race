import { useEffect, useRef, useState } from 'react'
import { Car } from '../../../components'
import { GarageCarItemProps } from './types'
import { useModal } from '../../../hooks'
import { GarageCarModal } from './garageCarModal'
import { GarageCarMenu } from './garageCarMenu'
import styles from './garageCarItem.module.css'

const INDEMT = 120

export const GarageCarItem = (props: GarageCarItemProps) => {
  const { modalIsOpen, openModal, closeModal } = useModal()
  const [width, setWidth] = useState(0)
  const carBoxRef = useRef<HTMLDivElement>(null)
  const carRef = useRef<HTMLDivElement>(null)
  const { color, name, id } = props

  useEffect(() => {
    if (carBoxRef.current) {
      setWidth(carBoxRef.current.offsetWidth - INDEMT)
    }
  }, [])

  return (
    <>
      <div ref={carBoxRef} className={styles.carBox}>
        <Car ref={carRef} color={color} />
      </div>
      <GarageCarMenu
        carId={id}
        content={name}
        currentElement={carRef.current}
        openModal={openModal}
        width={width}
      />
      <GarageCarModal
        carId={id}
        header={name}
        isOpen={modalIsOpen}
        closeModal={closeModal}
        payload={props}
      />
    </>
  )
}
