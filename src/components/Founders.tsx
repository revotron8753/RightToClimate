import dkDassImg   from '../public/faces/Dk Dass.jpeg'
import kanchanImg  from '../public/faces/Kanchan Mehra.jpg'

const FOUNDERS = [
  {
    name:     'Colonel DK Dass',
    title:    'Father of RightoClimate',
    img:      dkDassImg,
    alt:      'Colonel DK Dass – Father of RightoClimate',
    tags:     ['Army Veteran', 'Indian Bravehearts', 'Green Hydrogen Advocate', 'Nation Builder'],
    accent:   'var(--gold-light)',
    theme:    'dark',
    paras: [
      'Colonel DK Dass is not just a retired Army officer — he is a man who has dedicated his life to the nation, both in uniform and beyond it. Born into a proud defence family and educated at the prestigious Rashtriya Military School, Bangalore, Col DK Dass represents discipline, courage, and humanity.',
      'A true "Fauji at heart," he has taken the mission of serving India beyond the battlefield through Indian Bravehearts — an initiative focused on the welfare, rehabilitation, and dignity of veterans, war widows, battle casualties, and their families.',
      'As the driving force behind Right to Climate, he believes real patriotism means protecting both the people and the planet for future generations. His vision connects national service with climate responsibility, inspiring citizens to stand together for a greener, stronger, and more inclusive India. Col DK Dass is not just building an NGO — he is building a movement of purpose, respect, and hope.',
    ],
    quote: '"Real patriotism means protecting both the people and the planet for future generations."',
  },
  {
    name:     'Kanchan Mehra',
    title:    'Co-Founder, Right to Climate · Indian Bravehearts',
    img:      kanchanImg,
    alt:      'Kanchan Mehra – Co-Founder at Right to Climate',
    tags:     ['Renowned Visual Artist', '26+ Years of Excellence', 'Social Impact', 'Women Empowerment'],
    accent:   'var(--green-pale)',
    theme:    'light',
    paras: [
      'Kanchan Mehra is a powerful example of how art can create real social impact. A renowned visual artist with over 26 years of creative excellence, she has dedicated her life to turning emotions, culture, and human experiences into meaningful artistic expression. From national exhibitions to empowering women artists, her journey reflects passion, resilience, and purpose.',
      'As the Co-Founder of Right to Climate under Indian Bravehearts, Kanchan Mehra is using creativity as a force for change. What makes her mission truly inspiring is that the funds generated through her art initiatives and exhibitions are dedicated towards supporting war widows, veterans, and families of Indian Bravehearts — the real heroes of the nation. Inspired by the vision of Colonel DK Dass, her work connects patriotism, humanity, and sustainability on one platform.',
      'Through every painting, exhibition, and campaign, Kanchan Mehra is not just creating art — she is creating hope, dignity, and a brighter future for those who sacrificed for India.',
    ],
    quote: '"Through every painting, I am creating hope, dignity, and a brighter future for those who sacrificed for India."',
  },
]

export default function Founders() {
  return (
    <section id="founders" className="founders-new" aria-labelledby="founders-title">
      <div className="founders-new-inner">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span className="section-badge">Our Founders</span>
          <h2 className="section-title section-title--white" id="founders-title" style={{ marginTop: '1rem' }}>
            Meet the <em>Founders</em>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto', color: 'rgba(255,255,255,0.6)' }}>
            Right to Climate was built by two extraordinary individuals who believe that climate responsibility and national service are inseparable.
          </p>
        </div>

        {FOUNDERS.map(({ name, title, img, alt, tags, accent, theme, paras, quote }, i) => (
          <div
            key={name}
            className={`founder-row ${theme === 'light' ? 'founder-row--light' : ''}`}
            style={{ flexDirection: i % 2 === 1 ? 'row-reverse' : 'row' }}
          >
            <div className="founder-photo-col">
              <div className="founder-photo-frame">
                <img src={img} alt={alt} className="founder-photo-img" />
              </div>
              <blockquote className="founder-photo-quote" style={{ borderColor: accent }}>
                {quote}
              </blockquote>
            </div>

            <div className="founder-text-col">
              <div className="founder-tags-row">
                {tags.map(tag => (
                  <span className="founder-tag-pill" key={tag} style={{ borderColor: accent, color: accent }}>{tag}</span>
                ))}
              </div>
              <h3 className="founder-name-lg">{name}</h3>
              <p className="founder-title-lg" style={{ color: accent }}>{title}</p>
              <div className="founder-bio-paras">
                {paras.map((p, j) => <p key={j}>{p}</p>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
