import s from './ActivityCard.module.css'

export const ActivityCard = ({ className, children, onClick }) => {
    return (
        <div 
            className={`${s.card} ${className || ''}`}
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick?.(e)}
        >
            <h2>{children}</h2>
        </div>
    )
}