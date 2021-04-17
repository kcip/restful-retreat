import React from 'react'
import SuggestionCard from '../SuggestionCard/SuggestionCard'
import './sectionOne.scss'
const SectionOne = () => {
  return (
    <section className="suggestions">
      <h2>Check out these places...</h2>
      <SuggestionCard />
      <SuggestionCard />
      <SuggestionCard />
      <SuggestionCard />
      <SuggestionCard />
      <SuggestionCard />
      <SuggestionCard />
      <SuggestionCard />
    </section>
  )
}

export default SectionOne;