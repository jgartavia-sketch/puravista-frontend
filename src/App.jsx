import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Camera,
  Check,
  Clapperboard,
  Menu,
  MapPin,
  MessageCircle,
  Play,
  Share2,
  Sparkles,
  Video,
  X,
} from 'lucide-react'
import { useState } from 'react'
import realEstateImg from './assets/pura-vista-real-estate.png'
import studiosImg from './assets/pura-vista-studios.png'
import socialImg from './assets/pura-vista-social.png'
import './App.css'

const services = [
  {
    number: '01',
    icon: Building2,
    name: 'Real Estate',
    label: 'Propiedades',
    title: 'Encontrá un lugar a la altura de tu visión.',
    description:
      'Propiedades seleccionadas en Costa Rica, presentadas con contexto, criterio y una mirada capaz de revelar su verdadero valor.',
    action: 'Consultar propiedades',
    image: realEstateImg,
  },
  {
    number: '02',
    icon: Camera,
    name: 'Producción Audiovisual',
    label: 'Video · Fotografía · Recorridos',
    title: 'Convertimos ideas, espacios y marcas en historias.',
    description:
      'Videos comerciales, recorridos de propiedades, fotografía profesional y contenido cinematográfico para marcas.',
    action: 'Cotizar una producción',
    image: studiosImg,
  },
  {
    number: '03',
    icon: Share2,
    name: 'Marketing Digital',
    label: 'Estrategia · Contenido · Campañas',
    title: 'Convertimos presencia digital en crecimiento.',
    description:
      'Estrategia digital, creación de contenido, gestión de redes y campañas para posicionar marcas y generar oportunidades.',
    action: 'Impulsar mi marca',
    image: socialImg,
  },
]

const propertyVideos = [
  {
    id: 1,
    title: 'Villa Horizonte',
    location: 'La Fortuna, San Carlos',
    review:
      'Arquitectura tropical, amplios espacios sociales y una vista privilegiada al paisaje natural de Costa Rica.',
    duration: '01:42',
    image: realEstateImg,
  },
  {
    id: 2,
    title: 'Casa Bosque',
    location: 'Ciudad Quesada, San Carlos',
    review:
      'Una residencia contemporánea rodeada de naturaleza, pensada para vivir con calma, privacidad y conexión.',
    duration: '02:08',
    image: studiosImg,
  },
  {
    id: 3,
    title: 'Refugio del Pacífico',
    location: 'Guanacaste, Costa Rica',
    review:
      'Diseño abierto, luz natural y una atmósfera costera que convierte cada espacio en una experiencia.',
    duration: '01:56',
    image: socialImg,
  },
]

const productionPackages = [
  {
    id: 'esencial',
    icon: Video,
    tag: 'Para empezar',
    name: 'Contenido Esencial',
    description:
      'Una producción ágil para presentar un espacio, producto o servicio con una imagen profesional.',
    features: [
      '1 video principal de hasta 60 segundos',
      'Grabación profesional en una locación',
      'Edición, color y música',
      'Formato vertical u horizontal',
    ],
  },
  {
    id: 'historia',
    icon: Clapperboard,
    tag: 'Más solicitado',
    name: 'Historia de Marca',
    description:
      'Una pieza con narrativa, identidad y emoción para mostrar qué hace diferente a tu proyecto.',
    features: [
      'Concepto creativo y guion',
      'Video principal de hasta 2 minutos',
      'Jornada de grabación y fotografía',
      '3 cortes breves para redes sociales',
    ],
    featured: true,
  },
  {
    id: 'campana',
    icon: Sparkles,
    tag: 'Mayor alcance',
    name: 'Campaña Audiovisual',
    description:
      'Un sistema completo de contenido para lanzar, posicionar o renovar la presencia de una marca.',
    features: [
      'Dirección creativa y plan de producción',
      'Video principal cinematográfico',
      '6 piezas verticales para campañas',
      'Fotografía y banco de contenido',
    ],
  },
]

const productionVideos = [
  {
    id: 'production-1',
    type: 'production',
    title: 'Arquitectura que respira',
    meta: 'Video inmobiliario · 01:18',
    review:
      'Recorrido cinematográfico creado para revelar la luz, los materiales y la relación de una propiedad con su entorno.',
    duration: '01:18',
    image: studiosImg,
  },
  {
    id: 'production-2',
    type: 'production',
    title: 'Origen y oficio',
    meta: 'Historia de marca · 01:46',
    review:
      'Una pieza documental breve que conecta el trabajo detrás de una marca con las personas que le dan propósito.',
    duration: '01:46',
    image: realEstateImg,
  },
  {
    id: 'production-3',
    type: 'production',
    title: 'Una experiencia para recordar',
    meta: 'Campaña comercial · 00:54',
    review:
      'Contenido dinámico diseñado para presentar una experiencia, alimentar redes sociales y generar intención de compra.',
    duration: '00:54',
    image: socialImg,
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeService, setActiveService] = useState(0)
  const [selectedService, setSelectedService] = useState(null)
  const [activeVideo, setActiveVideo] = useState(null)

  const chooseService = (service) => {
    setSelectedService(service)
    setActiveVideo(null)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const returnHome = () => {
    setSelectedService(null)
    setActiveVideo(null)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <button className="brand" type="button" onClick={returnHome}>
          <span className="brand-mark">PV</span>
          <span className="brand-copy">
            <strong>Pura Vista</strong>
            <small>Costa Rica</small>
          </span>
        </button>

        <p className="header-signature">
          Real Estate · Producción Audiovisual · Marketing Digital
        </p>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}>
          <button type="button" onClick={returnHome}>Inicio</button>
          {services.map((service) => (
            <button
              type="button"
              key={service.name}
              onClick={() => chooseService(service)}
            >
              {service.name}
            </button>
          ))}
        </nav>
      </header>

      <main>
        {!selectedService ? (
          <section
            className={`gateway-section gateway-theme-${activeService + 1}`}
          >
            <span className="gateway-ambient" aria-hidden="true" />
            <div className="gateway-heading">
              <p className="eyebrow">Pura Vista · Costa Rica</p>
              <h1>
                Una visión.
                <span>Tres formas de hacerla realidad.</span>
              </h1>
              <p>
                Explorá nuestras áreas y elegí la experiencia que mejor conecta
                con tu proyecto.
              </p>

              <div className="gateway-cue" aria-hidden="true">
                <span className="gateway-cue-line" />
                <span>Elegí una perspectiva para continuar</span>
              </div>
            </div>

            <div className="gateway-panels">
              {services.map((service, index) => {
                const Icon = service.icon
                const isActive = activeService === index

                return (
                  <article
                    className={isActive ? 'gateway-panel is-active' : 'gateway-panel'}
                    key={service.name}
                    onMouseEnter={() => setActiveService(index)}
                    onFocus={() => setActiveService(index)}
                    tabIndex={0}
                  >
                    <img src={service.image} alt={`Pura Vista ${service.name}`} />
                    <span className="panel-overlay" aria-hidden="true" />
                    <span className="panel-glow" aria-hidden="true" />
                    <span className="panel-giant-number" aria-hidden="true">
                      {service.number}
                    </span>

                    <div className="panel-top">
                      <span>{service.number}</span>
                      <Icon size={22} strokeWidth={1.35} />
                    </div>

                    <div className="panel-content">
                      <p>{service.label}</p>
                      <h2>{service.name}</h2>
                      <div className="panel-reveal">
                        <p>{service.description}</p>
                        <button
                          type="button"
                          onClick={() => chooseService(service)}
                        >
                          Explorar esta área
                          <ArrowRight size={17} />
                        </button>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </section>
        ) : (
          <div className="service-experience">
            <section className="service-view">
              <img
                className="service-view-image"
                src={selectedService.image}
                alt={`Pura Vista ${selectedService.name}`}
              />
              <span className="service-view-overlay" aria-hidden="true" />

              <button className="back-button" type="button" onClick={returnHome}>
                <ArrowLeft size={17} />
                Ver las tres divisiones
              </button>

              <div className="service-view-content">
                <p className="eyebrow">
                  Pura Vista {selectedService.name}
                </p>
                <h1>{selectedService.title}</h1>
                <p>{selectedService.description}</p>

                <a
                  className="contact-button"
                  href={`https://wa.me/?text=${encodeURIComponent(
                    `Hola, me interesa Pura Vista ${selectedService.name}.`,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={18} />
                  {selectedService.action}
                  <ArrowRight size={17} />
                </a>
              </div>

              <div className="service-switcher" aria-label="Cambiar de división">
                {services.map((service) => (
                  <button
                    className={
                      selectedService.name === service.name ? 'is-current' : ''
                    }
                    type="button"
                    key={service.name}
                    onClick={() => chooseService(service)}
                  >
                    {service.name}
                  </button>
                ))}
              </div>
            </section>

            {selectedService.name === 'Real Estate' && (
              <section className="property-tours" aria-labelledby="property-tours-title">
                <div className="property-tours-heading">
                  <div>
                    <p className="eyebrow">Propiedades en movimiento</p>
                    <h2 id="property-tours-title">
                      Recorridos que permiten
                      <span>imaginarse viviendo ahí.</span>
                    </h2>
                  </div>

                  <p>
                    Conocé cada propiedad desde una perspectiva más cercana.
                    Estos recorridos son demostrativos y serán reemplazados por
                    los videos reales de cada inmueble.
                  </p>
                </div>

                <div className="property-video-grid">
                  {propertyVideos.map((property) => (
                    <article className="property-video-card" key={property.id}>
                      <button
                        className="property-video-cover"
                        type="button"
                        onClick={() => setActiveVideo(property)}
                        aria-label={`Ver recorrido de ${property.title}`}
                      >
                        <img src={property.image} alt={property.title} />
                        <span className="property-video-shade" aria-hidden="true" />
                        <span className="property-play" aria-hidden="true">
                          <Play size={20} fill="currentColor" />
                        </span>
                        <span className="property-duration">{property.duration}</span>
                      </button>

                      <div className="property-video-copy">
                        <p>
                          <MapPin size={14} />
                          {property.location}
                        </p>
                        <h3>{property.title}</h3>
                        <p>{property.review}</p>
                        <button type="button" onClick={() => setActiveVideo(property)}>
                          Ver recorrido
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {selectedService.name === 'Producción Audiovisual' && (
              <>
                <section className="production-packages" aria-labelledby="production-packages-title">
                  <div className="production-section-heading">
                    <div>
                      <p className="eyebrow">Servicios que se adaptan a tu visión</p>
                      <h2 id="production-packages-title">
                        Elegí cómo querés
                        <span>contar tu historia.</span>
                      </h2>
                    </div>

                    <p>
                      Estos combos son una guía inicial. Cada producción puede
                      ajustarse a la escala, objetivos y personalidad de tu proyecto.
                    </p>
                  </div>

                  <div className="production-package-grid">
                    {productionPackages.map((productionPackage) => {
                      const Icon = productionPackage.icon

                      return (
                        <article
                          className={
                            productionPackage.featured
                              ? 'production-package-card is-featured'
                              : 'production-package-card'
                          }
                          key={productionPackage.id}
                        >
                          <div className="production-package-top">
                            <span>{productionPackage.tag}</span>
                            <Icon size={24} strokeWidth={1.45} />
                          </div>

                          <h3>{productionPackage.name}</h3>
                          <p>{productionPackage.description}</p>

                          <ul>
                            {productionPackage.features.map((feature) => (
                              <li key={feature}>
                                <Check size={15} />
                                {feature}
                              </li>
                            ))}
                          </ul>

                          <a
                            href={`https://wa.me/?text=${encodeURIComponent(
                              `Hola, me interesa el combo ${productionPackage.name} de Pura Vista.`,
                            )}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Consultar este combo
                            <ArrowRight size={16} />
                          </a>
                        </article>
                      )
                    })}
                  </div>
                </section>

                <section className="production-work" aria-labelledby="production-work-title">
                  <div className="production-work-heading">
                    <p className="eyebrow">Producciones realizadas</p>
                    <h2 id="production-work-title">
                      Ideas convertidas
                      <span>en imágenes que se mueven.</span>
                    </h2>
                    <p>
                      Muestras demostrativas del tipo de narrativa que puede vivir
                      aquí. Luego podrás sustituirlas por los videos reales sin
                      cambiar el diseño.
                    </p>
                  </div>

                  <div className="production-video-grid">
                    {productionVideos.map((video) => (
                      <article className="production-video-card" key={video.id}>
                        <button
                          className="production-video-cover"
                          type="button"
                          onClick={() => setActiveVideo(video)}
                          aria-label={`Ver ${video.title}`}
                        >
                          <img src={video.image} alt={video.title} />
                          <span className="production-video-shade" aria-hidden="true" />
                          <span className="production-video-number">
                            {String(productionVideos.indexOf(video) + 1).padStart(2, '0')}
                          </span>
                          <span className="production-play" aria-hidden="true">
                            <Play size={20} fill="currentColor" />
                          </span>
                          <span className="property-duration">{video.duration}</span>
                        </button>

                        <div className="production-video-copy">
                          <p>{video.meta}</p>
                          <h3>{video.title}</h3>
                          <p>{video.review}</p>
                          <button type="button" onClick={() => setActiveVideo(video)}>
                            Ver proyecto
                            <ArrowRight size={16} />
                          </button>
                        </div>
                      </article>
                    ))}
                  </div>

                  <div className="production-guidance">
                    <div>
                      <Sparkles size={24} strokeWidth={1.4} />
                      <p>
                        <span>¿No sabés cuál combo elegir?</span>
                        Contanos qué querés comunicar y diseñamos la producción adecuada.
                      </p>
                    </div>

                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(
                        'Hola, quiero producir un video pero necesito orientación para elegir el servicio adecuado.',
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Diseñar mi producción
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </section>
              </>
            )}
          </div>
        )}
      </main>

      {activeVideo && (
        <div
          className="video-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
          onClick={() => setActiveVideo(null)}
        >
          <div className="video-modal-card" onClick={(event) => event.stopPropagation()}>
            <button
              className="video-modal-close"
              type="button"
              onClick={() => setActiveVideo(null)}
              aria-label="Cerrar video"
            >
              <X size={21} />
            </button>

            <div className="video-demo">
              <img src={activeVideo.image} alt="" />
              <span aria-hidden="true" />
              <div>
                <Play size={28} fill="currentColor" />
                <p>Video demostrativo</p>
                <small>
                  {activeVideo.type === 'production'
                    ? 'Aquí se reproducirá el video real del proyecto.'
                    : 'Aquí se reproducirá el recorrido real de la propiedad.'}
                </small>
              </div>
            </div>

            <div className="video-modal-copy">
              <p>
                {activeVideo.type === 'production' ? (
                  <>
                    <Clapperboard size={14} />
                    {activeVideo.meta}
                  </>
                ) : (
                  <>
                    <MapPin size={14} />
                    {activeVideo.location}
                  </>
                )}
              </p>
              <h2 id="video-modal-title">{activeVideo.title}</h2>
              <p>{activeVideo.review}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
