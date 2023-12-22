import React, { useCallback, useState } from 'react'


function useModal(initValue = false) {
    const [isShowModal, setIsShowModal] = useState(initValue)

    const onShowModal = useCallback(() => {
        setIsShowModal(true)
    }, [])
    const onCloseModal = useCallback(() => {
        setIsShowModal(false)
    }, [])

    const onToggleModal = () => {
        setIsShowModal(prev => !prev)
    }


    return { isShowModal, onShowModal, onCloseModal, onToggleModal }


}

export default useModal