// widgets/heroSection/ui/HeroSection.tsx
import { FindTour } from "../../../../features"
import s from './TourFinder.module.css'

export const TourFinder = () => {
  return (
    <section className={s.finderWidget}>
      <h1 className={s.title}>Откройте Россию заново</h1>
      <div className={s.container}>
        <FindTour />
      </div>
    </section>
  )
}
