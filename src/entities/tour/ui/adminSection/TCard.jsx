import s from './TCard.module.css';

export const TCard = ({ tour, onEdit, onDelete }) => {
  return (
    <div className={s.card}>
      <div className={s.imageContainer}>
        {tour.img_url ? (
          <img src={tour.img_url} alt={tour.title} className={s.image} />
        ) : (
          <div className={s.placeholderImage}>No Image</div>
        )}
      </div>

      <div className={s.content}>
        <h3 className={s.title}>{tour.title}</h3>
        
        <div className={s.meta}>
          <span className={s.price}>{tour.price}₽</span>
          <span className={s.duration}>{tour.duration} days</span>
          <span className={s.persons}>For {tour.persons}</span>
          <span className={tour.is_ready ? s.ready : s.notReady}>
            {tour.is_ready ? 'Ready' : 'Draft'}
          </span>
        </div>

        <p className={s.description}>
          {tour.description.length > 100
            ? `${tour.description.substring(0, 100)}...`
            : tour.description}
        </p>

        <div className={s.actions}>
          <button onClick={() => onEdit(tour)} className={s.editButton}>
            Edit
          </button>
          <button onClick={() => onDelete(tour.id)} className={s.deleteButton}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};