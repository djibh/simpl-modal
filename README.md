# Simpl Modal

Simpl Modal uses the latest React features and exposes a familiar, easy to use package. It is meant to be ultra simple to use and lightweight.

## Install

```
npm i -s simpl-modal
```

## Usage

Use the `<Modal>` component.

```js
import { useContext } from 'react'
import ExampleContent from '../path/context/ExampleContext'
import { Modal } from 'simpl-modal'

export default function Example() {
    const [ isModalOpen, setIsModalOpen ] = useContext(ExampleContext) // or use useState()

    return (
        <ParentComponent>
            <ModalButton onClick={() => setIsModalOpen(true)}>
            <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} showCloseButton theme='neutral' animated >
                <ChildrenComponent />
            </Modal>
        </ParentComponent>
    )
}
```

### `Style`

I used native CSS only as I didn't want to rely on any external lib, and to keep the size of the bundle as low as possible.

### `<Modal>`

Renders its children in a modal when open, nothing when not open.

**Props**

- `isOpen` \(Boolean\): A boolean that indicates whether the modal is open or not.
- `setIsOpen` \(Function\): A setter function that updated the isOpen value.
- `className` \(String\): A string that can be used to add custom CSS to the modal.
- `animated` \(Boolean\): When true, this indicates that we want the modal to open/close using a predefined transition.
- `theme` \(String\): Defines the background color scheme of the modal: neutral, light or dark.
- `showCloseButton` \(Boolean\): When true, adds a light close button on the top-right corner of the child component. Not necessary if you already have a close button in a child component, such as a form.
