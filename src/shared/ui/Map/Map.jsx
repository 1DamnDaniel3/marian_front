import { useEffect, useRef, useState } from 'react'
import s from './Map.module.css'

export const Map = ({ className, Map }) => {


    return (
        <div className={className}>

            <iframe
                className={s.Map}
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A8d47b8d8b8d3b5b5b5b5b5b5b5b5b5b5b5&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"
            />

        </div>
    )
}