import classNames from 'classNames'
import { useState } from 'react'
import { Button } from '../button'
import styles from './modal.module.css'
import { ModalFormType } from './types'

type InputType = React.ChangeEvent<HTMLInputElement>
type SubmitType = React.SyntheticEvent

export const ModalForm = ({
  actionType,
  onClose,
  onSubmit,
  payload,
}: ModalFormType) => {
  const [color, setColor] = useState(payload?.color || '#9f599b')
  const [name, setName] = useState(payload?.name || '')

  const handleColorChange = (event: InputType) => setColor(event.target.value)

  const handleNameChange = (event: InputType) => setName(event.target.value)

  const handleSubmit = (event: SubmitType) => {
    event.preventDefault()

    const target = event.target as typeof event.target & {
      carColor: { value: string }
      carModel: { value: string }
    }

    const color = target.carColor.value
    const name = target.carModel.value

    onSubmit({ color, name })
    onClose()
  }

  const inputNameClasses = classNames(styles.formInput, styles.inputName)
  const isButtonDisabled =
    !color || !name || (payload?.color === color && payload?.name === name)

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formRow}>
        <label htmlFor="carColor">Car color: </label>
        <input
          id="carColor"
          name="carColor"
          className={styles.formInput}
          type="color"
          value={color}
          onChange={handleColorChange}
        />
      </div>
      <div className={styles.formRow}>
        <label htmlFor="carModel">Name: </label>
        <input
          id="carModel"
          name="carModel"
          className={inputNameClasses}
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <Button disabled={isButtonDisabled} size="small" type="submit">
        {actionType}
      </Button>
    </form>
  )
}
