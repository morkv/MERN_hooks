import { useState } from 'react';

export function useModalState(defaultOpen = false) {
    const [ isOpen, setOpen ] = useState(defaultOpen);
    return { isOpen, toggle: () => setOpen(isOpen => !isOpen) };
};