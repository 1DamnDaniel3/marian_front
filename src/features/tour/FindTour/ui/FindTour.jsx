import { useState } from "react"
import { Input, Button } from "../../../../shared"
import s from './FindTour.module.css'

export const FindTour = () => {
  const [query, setQuery] = useState("")

  const handleSearch = () => {
    // Тут можно вызывать фильтрацию, роутинг, API и т.п.
    console.log("Поиск тура по:", query)
  }

  return (
    <div className={s.searchContainer}>
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Куда мечтаете поехать?"
        className={s.input}
        style = {{width: "300px", height: "36px"}}
      />
      <Button
        onClick={handleSearch}
        className={s.button}
        style = {{width: "200px", height: "60px"}}>
        
        Найти тур
      </Button>
    </div>
  )
}
