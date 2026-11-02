import { useState } from 'react'
import type { Category, Topic } from './data/mockTopics'
import { MOCK_TOPICS } from './data/mockTopics'
import './App.css'

const categories: Array<'All' | Category> = [
  'All',
  'Labour',
  'Land',
  'Family',
  'Business',
]

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      className="search-icon"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle cx="10.8" cy="10.8" r="6.8" />
      <path d="m16 16 4.2 4.2" />
    </svg>
  )
}

function TopicCard({ topic }: { topic: Topic }) {
  return (
    <article className="topic-card">
      {topic.isPopular && (
        <span className="popular">
          <span aria-hidden="true">★</span> Popular
        </span>
      )}
      <h2>{topic.title}</h2>
      <p className="topic-summary">{topic.summary}</p>
      <p className="law-reference">
        <span aria-hidden="true" className="law-icon">▱</span>
        {topic.lawReference}
      </p>
    </article>
  )
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | Category>('All')
  const [search, setSearch] = useState('')

  const visibleTopics = MOCK_TOPICS.topics.filter((topic) => {
    const matchesCategory =
      selectedCategory === 'All' || topic.category === selectedCategory
    const query = search.trim().toLowerCase()
    const matchesSearch =
      query.length === 0 ||
      topic.title.toLowerCase().includes(query) ||
      topic.summary.toLowerCase().includes(query)

    return matchesCategory && matchesSearch
  })

  return (
    <main>
      <header className="site-header">
        <div className="header-content">
          <div className="brand">
            <div className="brand-mark" aria-hidden="true">M</div>
            <div>
              <p className="brand-name">Mbaza Ubutabera</p>
              <p className="brand-subtitle">Legal topics</p>
            </div>
          </div>
          <label className="search-field">
            <SearchIcon />
            <input
              type="search"
              placeholder="Search topics, e.g. dismissal"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Search legal topics"
            />
          </label>
        </div>
      </header>

      <section className="topics-section" aria-label="Legal topics">
        <nav className="category-list" aria-label="Filter by category">
          {categories.map((category) => (
            <button
              className={`category-chip${selectedCategory === category ? ' selected' : ''}`}
              key={category}
              type="button"
              aria-pressed={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </nav>

        <p className="topic-count">
          {visibleTopics.length} {visibleTopics.length === 1 ? 'topic' : 'topics'}
        </p>

        {visibleTopics.length > 0 ? (
          <div className="topic-grid">
            {visibleTopics.map((topic) => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
          </div>
        ) : (
          <p className="empty-state">No topics found. Try another search.</p>
        )}
      </section>
    </main>
  )
}

export default App
