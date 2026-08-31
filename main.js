import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'

const gsap = window.gsap

// ─── PROJECT DATA ─────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 'verdant', title: 'look at the sky', fullTitle: 'look at the sky',
    category: 'Print Media', year: '2025', color: '#5aabd6',
    thumbnail: 'assets/project pictures/lookatthesky/thumbnail.jpg',
    heroImg:   'assets/project pictures/lookatthesky/coverpic.jpg',
    hoverImg:  'assets/project pictures/lookatthesky/thumbnail.jpg',
    feature: [
      { img: 'assets/project pictures/lookatthesky/diagrams.jpg', caption: '' },
      { img: 'assets/project pictures/lookatthesky/earthcover.jpg', caption: '' },
      { img: 'assets/project pictures/lookatthesky/tocspread2.jpg', caption: '' },
      { img: 'assets/project pictures/lookatthesky/burstspread.jpg', caption: '' },
    ],
    wip: [
      { img: 'assets/project pictures/lookatthesky/typetestsnocap.png', caption: 'Type tests' },
    ],
    process: `<p>This project was an entry for a fictional book series born from my own personal adoration of nature's many phenomenons. In particular, this entry focuses on phenomenon that occurs in the sky, and breaks them down into simple yet scientifically accurate explanations while presenting them with the beauty they deserve.</p><p>All imagery was painted, physically and digitally, by myself.</p>`,
    tools: ['InDesign', 'Photoshop', 'Illustrator', 'Maya'],
    deliverables: ['Logo System', 'Brand Guidelines', 'Packaging', 'Illustration Library'],
  },
  {
    id: 'helio', title: "dance with me, i'm burning up inside", fullTitle: "dance with me, i'm burning up inside",
    category: 'Video + 3D', year: '2025', color: '#f2c84e',
    thumbnail: 'https://picsum.photos/seed/edit2/600/450',
    hoverImg:  'https://picsum.photos/seed/edit2alt/600/450',
    feature: [{ img: 'assets/project pictures/dancewithmeimburningupinside/final.mp4', caption: '' }],
    wip: [
      { img: 'assets/project pictures/dancewithmeimburningupinside/dev-1.mp4', caption: '' },
      { img: 'assets/project pictures/dancewithmeimburningupinside/dev-2.mp4', caption: '' },
      { img: 'assets/project pictures/dancewithmeimburningupinside/dev-3.mp4', caption: '' },
      { img: 'assets/project pictures/dancewithmeimburningupinside/dev-4.mp4', caption: '' },
    ],
    process: `<p>Helio is an independent architecture and design journal focused on solar-passive design. We built the entire grid system from a 6-column base that allows for both tight editorial layouts and generous full-bleed spreads.</p>`,
    tools: ['After Effects', 'Maya', 'Video', 'FL Studio'],
    deliverables: ['Grid System', 'Typography Spec', 'Cover Design', 'Template Library'],
  },
  {
    id: 'aura', title: 'porter robinson logo', fullTitle: 'porter robinson logo',
    category: 'Poster + Logo', year: '2024', color: '#88c4e8',
    thumbnail: 'assets/project pictures/porterrobinsonlogo/final_logo.jpg',
    hoverImg:  'assets/project pictures/porterrobinsonlogo/final_logo.jpg',
    feature: [
      { img: 'assets/project pictures/porterrobinsonlogo/finalposter1forintern.jpg', caption: '' },
      { img: 'assets/project pictures/porterrobinsonlogo/finalposter2forintern.jpg', caption: '' },
    ],
    wip: [],
    processGrid: [
      'assets/project pictures/porterrobinsonlogo/ResearchCollection.jpg',
      'assets/project pictures/porterrobinsonlogo/ResearchCollection2.jpg',
      'assets/project pictures/porterrobinsonlogo/ResearchCollection3.jpg',
      'assets/project pictures/porterrobinsonlogo/ResearchCollection4.jpg',
      'assets/project pictures/porterrobinsonlogo/ResearchCollection5.jpg',
      'assets/project pictures/porterrobinsonlogo/ResearchCollection6.jpg',
      'assets/project pictures/porterrobinsonlogo/ResearchCollection7.jpg',
      'assets/project pictures/porterrobinsonlogo/ResearchCollection8.jpg',
      'assets/project pictures/porterrobinsonlogo/ResearchCollection10.jpg',
      'assets/project pictures/porterrobinsonlogo/ResearchCollection11.jpg',
      'assets/project pictures/porterrobinsonlogo/ResearchCollection28.jpg',
      'assets/project pictures/porterrobinsonlogo/ResearchCollection29.jpg',
    ],
    process: `<p>Aura is a wellness tracking app that translates biometric data into something beautiful and legible. We designed a data visualisation system from scratch — organic, wave-based forms that communicate trends intuitively.</p>`,
    tools: ['Maya', 'InDesign', 'Illustrator', 'Photography'],
    deliverables: ['Design System', 'iOS App Screens', 'Prototype', 'Motion Spec'],
  },
  {
    id: 'soleil', title: 'natural ice rebrands', fullTitle: 'natural ice rebrands',
    category: 'Packaging', year: '2024', color: '#f0a898',
    thumbnail: 'assets/project pictures/naturalicerebrands/nattysquarenew.jpg',
    heroImg:   'assets/project pictures/naturalicerebrands/newcans.jpg',
    hoverImg:  'assets/project pictures/naturalicerebrands/nattysquarenew.jpg',
    feature: [],
    wip: [],
    customSections: [
      {
        heading: 'idea 1: refine',
        hero: 'assets/project pictures/naturalicerebrands/boxcan3.jpg',
        left: 'assets/project pictures/naturalicerebrands/can1ad2.jpg',
        rightTop: 'assets/project pictures/naturalicerebrands/can1ad1.jpg',
        rightBottom: 'assets/project pictures/naturalicerebrands/can1ad3-3.jpg',
      },
      {
        heading: 'idea 2: evolve',
        hero: 'assets/project pictures/naturalicerebrands/neowebsiteboxcan3.jpg',
        left: 'assets/project pictures/naturalicerebrands/nearfinalbill.jpg',
        rightTop: 'assets/project pictures/naturalicerebrands/lightbannerfinal.jpg',
        rightBottom: 'assets/project pictures/naturalicerebrands/newbusstation.jpg',
      },
      {
        heading: 'idea 3: wildcard',
        hero: 'assets/project pictures/naturalicerebrands/neowebsiteboxcan2.jpg',
        left: 'assets/project pictures/naturalicerebrands/can3ad3website.jpg',
        rightTop: 'assets/project pictures/naturalicerebrands/streetadnew.jpg',
        rightBottom: 'assets/project pictures/naturalicerebrands/can3ad3final.jpg',
      },
    ],
    process: `<p>Soleil is a range of small-batch, biodynamic skincare products. The structural solution uses a single uncoated FSC-certified board stock with soy-based inks. No plastic components.</p>`,
    tools: ['InDesign', 'Photoshop', 'Illustrator'],
    deliverables: ['Structural Design', 'Surface Design', 'Print Spec', 'Dielines'],
  },
  {
    id: 'bloom', title: 'move!!!', fullTitle: 'move!!!',
    category: 'Video + 3D', year: '2025', color: '#8fcc9e',
    thumbnail: 'assets/project pictures/move/cover.jpg',
    hoverImg:  'assets/project pictures/move/cover.jpg',
    feature: [{ img: 'assets/project pictures/move/final.mp4', caption: '' }],
    galleryTitle: 'Clips from video',
    wip: [
      { img: 'assets/project pictures/move/dev-1.mp4', caption: '' },
      { img: 'assets/project pictures/move/dev-2.mp4', caption: '' },
      { img: 'assets/project pictures/move/dev-3.mp4', caption: '' },
    ],
    process: `<p>Bloom is the motion identity for a new arts foundation. A generative GLSL shader system grows a unique blooming pattern each time — seeded by date and location. No two animations are identical.</p>`,
    tools: ['After Effects', 'Maya', 'FL Studio'],
    deliverables: ['Motion System', 'Logo Animation', 'Web Component', 'Usage Guidelines'],
  },
  {
    id: 'tidal', title: 'studio.com', fullTitle: 'studio.com',
    category: 'UI/UX', year: '2025', color: '#7ecabd',
    thumbnail: 'assets/project pictures/studiocom/realcoverpic.jpg',
    hoverImg:  'assets/project pictures/studiocom/realcoverpic.jpg',
    featureTitle: 'Prototype Footage',
    feature: [
      { img: 'assets/project pictures/studiocom/studio-1.mp4', caption: '', autoplay: true },
      { img: 'assets/project pictures/studiocom/studio-2.mp4', caption: '', autoplay: true },
      { img: 'assets/project pictures/studiocom/studio-3.mp4', caption: '', autoplay: true },
    ],
    wip: [
      { img: 'assets/project pictures/studiocom/sketch.jpg', caption: '' },
      { img: 'assets/project pictures/studiocom/Desktop_-_1.jpg', caption: '' },
      { img: 'assets/project pictures/studiocom/progro.jpg', caption: '' },
    ],
    process: `<p>Tidal was a touring exhibition exploring the intersection of climate science and indigenous coastal knowledge. The exhibition uses tide-table data to drive the spatial arrangement — simulating a tidal cycle over the course of a visit.</p>`,
    tools: ['Figma', 'Maya'],
    deliverables: ['Spatial Concept', 'Wayfinding System', 'Exhibition Graphics', 'Print Production'],
  },
]

// ─── LOADERS ──────────────────────────────────────────────────────────────────
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/')
const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)

// ─── THREE.JS SETUP ───────────────────────────────────────────────────────────
const canvas = document.getElementById('main-canvas')
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.outputColorSpace = THREE.SRGBColorSpace
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1.0

const scene = new THREE.Scene()
scene.background = null // transparent — lets the background video show through

const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 200)
camera.position.set(0, 0, 9)
camera.lookAt(0, 0, 0)

// Post-processing (bloom) removed: UnrealBloomPass forces the canvas to fully
// opaque alpha, which blocked the background video from showing through.
// Rendering directly preserves transparency.

// Environment map: gives PBR materials (metalness/roughness) something real
// to reflect. Without this, materials read as flat/plastic no matter how
// bright the lights are — this is what actually makes it look "rendered".
// Uses a soft procedural sky gradient (matching the site's own palette)
// rather than a generic indoor room, so reflections feel more atmospheric.
function createSkyEnvironment() {
  const skyScene = new THREE.Scene()
  const skyGeo = new THREE.SphereGeometry(40, 32, 32)
  const skyMat = new THREE.ShaderMaterial({
    uniforms: {
      topColor:    { value: new THREE.Color(0x8fc3e8) },
      bottomColor: { value: new THREE.Color(0xfaf7f0) },
      offset:      { value: 8 },
      exponent:    { value: 0.7 },
    },
    vertexShader: `
      varying vec3 vWorldPosition;
      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 topColor;
      uniform vec3 bottomColor;
      uniform float offset;
      uniform float exponent;
      varying vec3 vWorldPosition;
      void main() {
        float h = normalize(vWorldPosition + offset).y;
        gl_FragColor = vec4(mix(bottomColor, topColor, max(pow(max(h, 0.0), exponent), 0.0)), 1.0);
      }
    `,
    side: THREE.BackSide,
  })
  skyScene.add(new THREE.Mesh(skyGeo, skyMat))
  skyScene.add(new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6))
  return skyScene
}
const pmrem = new THREE.PMREMGenerator(renderer)
scene.environment = pmrem.fromScene(createSkyEnvironment(), 0.02).texture

// Hemisphere light: simulates sky light from above + ground bounce from below
scene.add(new THREE.HemisphereLight(0xcfe8f7, 0xb9c4c9, 1.6))

// Key light: a real directional light gives materials actual highlights and
// shadow-side contrast, which pure ambient/hemisphere light can't produce
const keyLight = new THREE.DirectionalLight(0xffffff, 1.4)
keyLight.position.set(4, 6, 5)
scene.add(keyLight)

// ─── MODEL HELPERS ────────────────────────────────────────────────────────────
function fitToSize(object, targetSize = 2.3) {
  const box = new THREE.Box3().setFromObject(object)
  const center = box.getCenter(new THREE.Vector3())
  const size = box.getSize(new THREE.Vector3())
  object.position.sub(center)
  const scale = targetSize / Math.max(size.x, size.y, size.z)
  object.scale.setScalar(scale)
  object.userData.restScale = scale // remember the correct resting scale for swapModel
}

function makeGlassMaterial(color = 0xb0d8f0) {
  return new THREE.MeshPhysicalMaterial({
    color, metalness: 0.06, roughness: 0.06,
    transmission: 0, thickness: 2.4, ior: 1.58,
    iridescence: 0.85, iridescenceIOR: 1.88,
    iridescenceThicknessRange: [80, 500],
  })
}

function applyGlass(object) {
  const mat = makeGlassMaterial()
  object.traverse((c) => { if (c.isMesh) c.material = mat })
}

// ─── PROJECT MODEL (fallback: crystal cluster) ────────────────────────────────
function createProjectFallback() {
  const group = new THREE.Group()
  const mat = makeGlassMaterial(0xb0d8f0)
  const add = (r, x, y, z, d = 3) => {
    const m = new THREE.Mesh(new THREE.IcosahedronGeometry(r, d), mat)
    m.position.set(x, y, z)
    group.add(m)
  }
  add(1.2, 0, 0, 0, 4)
  add(0.6, 0.9, 0.5, -0.3, 2)
  add(0.5, -0.8, 0.4, 0.4, 2)
  add(0.4, 0.3, -0.6, 0.8, 2)
  return group
}

// ─── ABOUT MODEL (fallback: glass torus knot) ─────────────────────────────────
function createAboutFallback() {
  const geo = new THREE.TorusKnotGeometry(0.88, 0.24, 200, 32, 2, 3)
  return new THREE.Mesh(geo, makeGlassMaterial(0xc8e0f5))
}

// ─── MODEL STATE ──────────────────────────────────────────────────────────────
let centerMesh = null
let projectMesh = null  // cached project model
let aboutMesh = null    // cached about model

function loadOrFallback(path, fallbackFn, onReady) {
  gltfLoader.load(
    path,
    (gltf) => { fitToSize(gltf.scene); onReady(gltf.scene) }, // real models keep their own exported materials
    undefined,
    ()    => { const m = fallbackFn(); fitToSize(m); onReady(m) }
  )
}

// Load project model immediately
loadOrFallback('models/scene.glb', createProjectFallback, (mesh) => {
  projectMesh = mesh
  centerMesh = mesh
  scene.add(centerMesh)
})

// Pre-load about model in background
loadOrFallback('models/about.glb', createAboutFallback, (mesh) => {
  aboutMesh = mesh
  // Manual nudge in case the model's bounding box isn't perfectly centered
  // on its visible geometry (e.g. stray/asymmetric geometry in the export)
  aboutMesh.position.x += -1.2
  aboutMesh.position.y += 0
  aboutMesh.userData.restRotationX = THREE.MathUtils.degToRad(18) // tilt down
  aboutMesh.userData.restScale = (aboutMesh.userData.restScale ?? 1) * 1.35 // a bit bigger
  // don't add to scene yet
})

// ─── RESIZE ───────────────────────────────────────────────────────────────────
function onResize() {
  const w = canvas.clientWidth
  const h = canvas.clientHeight
  if (!w || !h) return
  camera.aspect = w / h
  camera.updateProjectionMatrix()
  renderer.setSize(w, h, false)
  layoutCards()
}
new ResizeObserver(onResize).observe(document.getElementById('stage'))

// ─── ORBITAL DATA ─────────────────────────────────────────────────────────────
const N = PROJECTS.length
const cardsLayer = document.getElementById('cards-layer')
const ringCircle = document.getElementById('orbit-ring-circle')
const ringGlow   = document.getElementById('orbit-ring-glow')
const ringEl     = document.getElementById('orbit-ring-svg')

const orbitals = PROJECTS.map((p, i) => ({
  project: p,
  index: i,
  angle: (i / N) * Math.PI * 2 - Math.PI / 2,
  floatPhase: (i / N) * Math.PI * 2,
  pushRadius: 0,
  cardScale: 1,
  cardOpacity: 1,
  element: null,
}))

// ─── CARD CREATION ────────────────────────────────────────────────────────────
function createCard(orbital) {
  const { project, index } = orbital
  const el = document.createElement('div')
  el.className = 'project-card'
  el.innerHTML = `
    <div class="card__inner">
      <div class="card__images">
        <img class="card__img card__img--main"  src="${project.thumbnail}" alt="${project.title}" loading="lazy"/>
        <img class="card__img card__img--hover" src="${project.hoverImg}"  alt="${project.title} detail" loading="lazy"/>
      </div>
      <div class="card__overlay">
        <span class="card__pill">${project.category}</span>
        <div class="card__info">
          <span class="card__title">${project.title}</span>
          <span class="card__cta">View project →</span>
        </div>
      </div>
    </div>`

  el.addEventListener('mouseenter', () => {
    if (isAboutMode) return
    ;[ { idx: (index - 1 + N) % N, push: 52 },
       { idx: (index + 1) % N,     push: 52 },
       { idx: (index - 2 + N) % N, push: 24 },
       { idx: (index + 2) % N,     push: 24 },
    ].forEach(({ idx, push }) => {
      gsap.to(orbitals[idx], { pushRadius: push, duration: 0.55, ease: 'power2.out' })
    })
  })

  el.addEventListener('mouseleave', () => {
    orbitals.forEach((o) => gsap.to(o, { pushRadius: 0, duration: 0.5, ease: 'power2.inOut' }))
  })

  el.addEventListener('click', () => { if (!isAboutMode) openModal(project) })
  return el
}

orbitals.forEach((o) => { o.element = createCard(o); cardsLayer.appendChild(o.element) })

// ─── LAYOUT ───────────────────────────────────────────────────────────────────
let baseRadius = 300, stageCx = 0, stageCy = 0

function computeRadius(w, h) {
  return Math.max(190, Math.min(370, Math.min(w, h) * 0.37))
}

function layoutCards() {
  const stage = document.getElementById('stage')
  const w = stage.clientWidth
  const h = stage.clientHeight
  baseRadius = computeRadius(w, h)
  stageCx = w / 2
  stageCy = h / 2

  ringCircle.setAttribute('cx', stageCx)
  ringCircle.setAttribute('cy', stageCy)
  ringCircle.setAttribute('r', baseRadius)
  ringGlow.setAttribute('cx', stageCx)
  ringGlow.setAttribute('cy', stageCy)
  ringGlow.setAttribute('r', baseRadius)
  orbitals.forEach((o) => {
    o.element.style.left = `${stageCx + baseRadius * Math.cos(o.angle)}px`
    o.element.style.top  = `${stageCy + baseRadius * Math.sin(o.angle)}px`
  })
}
onResize() // initial sizing — called here so orbitals/ringCircle are already defined

// ─── MOUSE-FOLLOW MODEL ────────────────────────────────────────────────────────
const mouseNDC = { x: 0, y: 0 }
window.addEventListener('pointermove', (e) => {
  mouseNDC.x = (e.clientX / window.innerWidth) * 2 - 1
  mouseNDC.y = -(e.clientY / window.innerHeight) * 2 + 1
})

// Max head-turn range — resting straight ahead (mouseNDC starts at 0,0) until
// the cursor moves, then turning toward it within these bounds rather than
// literally aiming at a point (which caused huge, unnatural rotations).
const MAX_YAW   = THREE.MathUtils.degToRad(42)
const MAX_PITCH = THREE.MathUtils.degToRad(23)
const lookQuat  = new THREE.Quaternion()
const lookEuler = new THREE.Euler(0, 0, 0, 'YXZ')

function updateMouseLookTarget() {
  lookEuler.set(-mouseNDC.y * MAX_PITCH, mouseNDC.x * MAX_YAW, 0, 'YXZ')
  lookQuat.setFromEuler(lookEuler)
}

// ─── ANIMATION LOOP ───────────────────────────────────────────────────────────
let lastTime = 0

;(function tick(now = 0) {
  requestAnimationFrame(tick)
  const dt = Math.min((now - lastTime) / 1000, 0.05)
  lastTime = now

  if (centerMesh) {
    if (isTransitioning) {
      // GSAP owns rotation/scale during the swap — don't fight it with per-frame updates
    } else if (isAboutMode) {
      // stays still while in About mode — no spin, no cursor tracking
    } else {
      updateMouseLookTarget()
      centerMesh.quaternion.slerp(lookQuat, 0.12)
    }
    centerMesh.position.y = 0 + Math.sin(now * 0.0005) * 0.14
  }

  orbitals.forEach((o) => {
    const totalR = baseRadius + o.pushRadius
    const bx = stageCx + totalR * Math.cos(o.angle)
    const by = stageCy + totalR * Math.sin(o.angle)
    const floatY = Math.sin(now * 0.00065 + o.floatPhase) * 11
    const floatX = Math.cos(now * 0.00082 + o.floatPhase * 0.8) * 4

    o.element.style.left    = `${bx}px`
    o.element.style.top     = `${by}px`
    o.element.style.opacity = o.cardOpacity
    o.element.style.transform =
      `translate(calc(-50% + ${floatX}px), calc(-50% + ${floatY}px)) scale(${o.cardScale})`
  })

  renderer.render(scene, camera)
})()

// ─── ABOUT / PROJECT MODE TRANSITION ─────────────────────────────────────────
let isAboutMode = false
let isTransitioning = false
const aboutBtn     = document.getElementById('about-btn')
const aboutBtnLabel= document.getElementById('about-btn-label')
const aboutHello   = document.getElementById('about-hello')
const aboutBio     = document.getElementById('about-bio')
const aboutRevealGroup = document.getElementById('about-reveal-group')
const siteLogo = document.getElementById('site-logo')
const aboutVideo   = document.getElementById('about-video')

// Swap the center model out with a scale-down → swap → scale-up transition
function swapModel(incoming, onDone) {
  const restScale = incoming.userData.restScale ?? 1
  const restRotX  = incoming.userData.restRotationX ?? 0
  isTransitioning = true
  if (!centerMesh) {
    centerMesh = incoming
    centerMesh.rotation.set(restRotX, 0, 0)
    centerMesh.scale.set(0, 0, 0)
    scene.add(centerMesh)
    gsap.to(centerMesh.scale, {
      x: restScale, y: restScale, z: restScale, duration: 0.5, ease: 'back.out(1.8)',
      onComplete: () => { isTransitioning = false; onDone() }
    })
    return
  }
  const outgoing = centerMesh
  // spin + shrink out
  gsap.to(outgoing.rotation, { y: outgoing.rotation.y + Math.PI * 5, duration: 0.75, ease: 'power2.in' })
  gsap.to(outgoing.scale, {
    x: 0, y: 0, z: 0, duration: 0.35, delay: 0.38, ease: 'power2.in',
    onComplete: () => {
      scene.remove(outgoing)
      centerMesh = incoming
      centerMesh.rotation.set(restRotX, 0, 0) // reset to this model's own resting tilt
      centerMesh.scale.set(0, 0, 0)
      scene.add(centerMesh)
      gsap.to(centerMesh.scale, {
        x: restScale, y: restScale, z: restScale, duration: 0.55, ease: 'back.out(1.8)',
        onComplete: () => { isTransitioning = false; onDone() }
      })
    }
  })
}

function enterAbout() {
  isAboutMode = true
  isTransitioning = true // lock rotation immediately, don't wait for the delayed swapModel call
  aboutBtn.classList.add('active')
  aboutBtnLabel.textContent = '← Back'

  // Reveal the white backdrop as an expanding circle from the About button's corner
  gsap.to(aboutRevealGroup, { '--reveal-r': '150%', duration: 0.7, ease: 'power2.out' })
  gsap.to(siteLogo, { opacity: 0, duration: 0.4, ease: 'power2.out' })

  // Fade the placeholder video in through the same circle
  aboutVideo.currentTime = 0
  aboutVideo.play().catch(() => {})
  gsap.to(aboutVideo, { opacity: 0.6, duration: 0.9, delay: 0.15, ease: 'power2.out' })

  // Fade ring out
  gsap.to(ringEl, { opacity: 0, duration: 0.4 })

  // Bubble-pop cards out — each card pops in staggered sequence
  orbitals.forEach((o, i) => {
    const delay = i * 0.055
    gsap.timeline({ delay })
      .to(o, { cardScale: 1.18, duration: 0.14, ease: 'power2.in' })
      .to(o, { cardScale: 0, cardOpacity: 0, duration: 0.22, ease: 'power2.in' })
  })

  // Swap model after first few cards pop
  const incoming = aboutMesh || createAboutFallback()
  setTimeout(() => swapModel(incoming, () => {}), 280)

  // Show about text after cards finish popping
  const textDelay = N * 0.055 + 0.28
  gsap.fromTo(aboutHello,
    { opacity: 0, x: -28 },
    { opacity: 1, x: 0, duration: 0.65, delay: textDelay, ease: 'power2.out' }
  )
  gsap.fromTo(aboutBio,
    { opacity: 0, y: 22 },
    { opacity: 1, y: 0, duration: 0.65, delay: textDelay + 0.12, ease: 'power2.out' }
  )

  // Pop the photo bubbles in on the far right, staggered
  document.querySelectorAll('.about-bubble').forEach((el, i) => {
    gsap.fromTo(el,
      { opacity: 0, scale: 0.3 },
      { opacity: 1, scale: 1, duration: 0.55, delay: textDelay + 0.2 + i * 0.1, ease: 'back.out(2)' }
    )
  })
}

function exitAbout() {
  isAboutMode = false
  isTransitioning = true // lock rotation immediately, don't wait for the delayed swapModel call
  aboutBtn.classList.remove('active')
  aboutBtnLabel.textContent = 'About'

  // Shrink the white circle back down
  gsap.to(aboutRevealGroup, { '--reveal-r': '0%', duration: 0.5, ease: 'power2.in' })
  gsap.to(siteLogo, { opacity: 1, duration: 0.4, delay: 0.15, ease: 'power2.in' })

  // Fade the video back out
  gsap.to(aboutVideo, { opacity: 0, duration: 0.3, ease: 'power2.in', onComplete: () => aboutVideo.pause() })

  // Hide about text
  gsap.to(aboutHello, { opacity: 0, x: -20, duration: 0.28, ease: 'power2.in' })
  gsap.to(aboutBio,   { opacity: 0, y: 12,  duration: 0.22, ease: 'power2.in' })

  // Pop the photo bubbles back out
  document.querySelectorAll('.about-bubble').forEach((el, i) => {
    gsap.to(el, { opacity: 0, scale: 0.3, duration: 0.22, delay: i * 0.03, ease: 'power2.in' })
  })

  // Swap model back
  const incoming = projectMesh || createProjectFallback()
  setTimeout(() => {
    swapModel(incoming, () => {})

    // Fade ring back in
    gsap.to(ringEl, { opacity: 1, duration: 0.5, delay: 0.4 })

    // Bubble cards back in
    orbitals.forEach((o, i) => {
      o.cardScale   = 0
      o.cardOpacity = 0
      const delay = 0.3 + i * 0.065
      gsap.timeline({ delay })
        .to(o, { cardOpacity: 1, cardScale: 1.12, duration: 0.3, ease: 'back.out(2.5)' })
        .to(o, { cardScale: 1, duration: 0.18, ease: 'power2.out' })
    })
  }, 220)
}

aboutBtn.addEventListener('click', () => {
  if (isAboutMode) exitAbout()
  else enterAbout()
})

// ─── MODAL ────────────────────────────────────────────────────────────────────
const modal         = document.getElementById('modal')
const modalClose    = document.getElementById('modal-close')
const modalBackdrop = document.getElementById('modal-backdrop')
const modalPrevBtn  = document.getElementById('modal-prev-btn')
const modalNextBtn  = document.getElementById('modal-next-btn')

// Spot colors for each project category — bright, saturated, one distinct
// color per type (think New 3DS button colors), applied to the category pill
const CATEGORY_COLORS = {
  'Print Media':   '#FF5A5F', // red
  'Poster + Logo': '#FFC93C', // yellow
  'Video + 3D':    '#4A90D9', // blue
  'Packaging':     '#4CAF50', // green
  'UI/UX':         '#B57EDC', // purple
}
const CATEGORY_COLOR_FALLBACK = '#9AA5B1'

// Detects whether an asset path is a video file, so gallery/feature slots
// can render <video> instead of <img> automatically based on file extension
function isVideoSrc(src) {
  return /\.(mp4|webm|mov)$/i.test(src)
}

function renderModalContent(project) {
  document.getElementById('modal-panel').dataset.project = project.id
  document.getElementById('modal-hero').innerHTML =
    `<img src="${project.heroImg || project.thumbnail}" alt="${project.title}" />`
  document.getElementById('modal-title').textContent    = project.fullTitle
  const categoryEl = document.getElementById('modal-category')
  categoryEl.textContent = project.category
  categoryEl.style.background = CATEGORY_COLORS[project.category] || CATEGORY_COLOR_FALLBACK
  categoryEl.style.color = '#fff'
  categoryEl.style.borderColor = 'transparent'
  document.getElementById('modal-year').textContent     = project.year
  document.getElementById('modal-tools').innerHTML =
    project.tools.map((t) => `<span class="tool-tag">${t}</span>`).join('')
  document.getElementById('modal-gallery-title').textContent = project.galleryTitle || 'Development'
  document.getElementById('modal-gallery').innerHTML =
    project.wip.map(({ img, caption }) => `
      <div class="modal__gallery-item">
        ${isVideoSrc(img)
          ? `<video src="${img}" autoplay muted loop playsinline></video>`
          : `<img src="${img}" alt="${caption}" loading="lazy"/>`}
        ${caption ? `<div class="modal__gallery-caption">${caption}</div>` : ''}
      </div>`).join('')
  document.getElementById('modal-progress-section-wrap').style.display = project.wip.length ? '' : 'none'
  document.getElementById('modal-process').innerHTML = project.process

  // Clickable process grid (e.g. Porter Robinson's research collection) — empty unless defined
  const processGridWrap = document.getElementById('modal-process-grid')
  if (project.processGrid?.length) {
    processGridWrap.innerHTML = project.processGrid.map((src, i) => `
      <div class="modal__process-grid-item">
        <img src="${src}" alt="${project.fullTitle} — research ${i + 1}" loading="lazy"/>
      </div>`).join('')
  } else {
    processGridWrap.innerHTML = ''
  }

  // Custom per-project sections (e.g. "idea 1: refine") — empty/hidden unless a project defines them
  const customWrap = document.getElementById('modal-custom-sections')
  if (project.customSections?.length) {
    customWrap.innerHTML = project.customSections.map(({ heading, hero, left, rightTop, rightBottom }) => `
      <div class="modal__idea-section">
        <h4>${heading}</h4>
        <div class="modal__idea-hero"><img src="${hero}" alt="${heading}" loading="lazy"/></div>
        <div class="modal__idea-grid">
          <div class="modal__idea-grid-left"><img src="${left}" alt="${heading}" loading="lazy"/></div>
          <div class="modal__idea-grid-right-top"><img src="${rightTop}" alt="${heading}" loading="lazy"/></div>
          <div class="modal__idea-grid-right-bottom"><img src="${rightBottom}" alt="${heading}" loading="lazy"/></div>
        </div>
      </div>`).join('')
  } else {
    customWrap.innerHTML = ''
  }

  document.getElementById('modal-feature-title').textContent = project.featureTitle || 'Final Piece'
  document.getElementById('modal-feature').innerHTML =
    project.feature.map(({ img, caption, autoplay }) => `
      <div class="modal__feature-item">
        ${isVideoSrc(img)
          ? (autoplay
              ? `<video src="${img}" autoplay muted loop playsinline></video>`
              : `<video src="${img}" controls preload="metadata"></video>`)
          : `<img src="${img}" alt="${caption || project.fullTitle + ' — final piece'}" loading="lazy"/>`}
        ${caption ? `<div class="modal__feature-caption">${caption}</div>` : ''}
      </div>`).join('')
  document.getElementById('modal-feature-section-wrap').style.display = project.feature.length ? '' : 'none'
  const delWrap = document.getElementById('modal-deliverables-wrap')
  const delList = document.getElementById('modal-deliverables')
  if (project.deliverables?.length) {
    delWrap.style.display = ''
    delList.innerHTML = project.deliverables.map((d) => `<span class="deliverable-tag">${d}</span>`).join('')
  } else {
    delWrap.style.display = 'none'
  }
  document.getElementById('modal-panel').querySelector('.modal__scroll').scrollTop = 0

  // Wire every image anywhere in this modal into one navigable lightbox set —
  // arrows cycle through all of them in DOM order, videos are untouched
  const allModalImgs = document.querySelectorAll(
    '#modal-hero img, #modal-process-grid img, #modal-gallery img, #modal-custom-sections img, #modal-feature img'
  )
  const allImagesList = Array.from(allModalImgs).map((img) => ({ src: img.src, alt: img.alt }))
  allModalImgs.forEach((img, i) => {
    img.addEventListener('click', () => openLightboxAt(allImagesList, i))
  })

  // Populate prev/next project navigation (order follows the same circle as the cards)
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id)
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length]
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length]
  document.getElementById('modal-prev-label').textContent = prevProject.title
  document.getElementById('modal-next-label').textContent = nextProject.title
  modalPrevBtn.onclick = () => navigateModal(prevProject, -1)
  modalNextBtn.onclick = () => navigateModal(nextProject, 1)
}

function openModal(project) {
  renderModalContent(project)
  modal.classList.add('active')
}

// Animate content out, swap it, animate back in — direction: -1 for prev, 1 for next
function navigateModal(project, direction) {
  const hero = document.getElementById('modal-hero')
  const content = document.querySelector('.modal__content')
  const offset = 26 * direction

  gsap.to([hero, content], {
    opacity: 0, x: -offset, duration: 0.22, ease: 'power2.in',
    onComplete: () => {
      renderModalContent(project)
      gsap.fromTo([hero, content], { opacity: 0, x: offset }, { opacity: 1, x: 0, duration: 0.32, ease: 'power2.out' })
    }
  })
}

function closeModal() { modal.classList.remove('active') }
modalClose.addEventListener('click', closeModal)
modalBackdrop.addEventListener('click', closeModal)

// ─── IMAGE LIGHTBOX ───────────────────────────────────────────────────────────
const lightbox         = document.getElementById('lightbox')
const lightboxImg       = document.getElementById('lightbox-img')
const lightboxCaption   = document.getElementById('lightbox-caption')
const lightboxClose     = document.getElementById('lightbox-close')
const lightboxBackdrop  = document.getElementById('lightbox-backdrop')
const lightboxPrevBtn   = document.getElementById('lightbox-prev')
const lightboxNextBtn   = document.getElementById('lightbox-next')

let lightboxSet = []   // the current navigable set of {src, alt}
let lightboxIdx = 0

function renderLightboxAt(i) {
  const { src, alt } = lightboxSet[i]
  lightboxImg.src = src
  lightboxImg.alt = alt || ''
  lightboxCaption.textContent = alt || ''
}

// Opens a single image with no navigation (existing behavior for hero/gallery/feature/idea images)
function openLightbox(src, alt) {
  openLightboxAt([{ src, alt }], 0)
}

// Opens a navigable set of images — arrows appear only when there's more than one
function openLightboxAt(images, index) {
  lightboxSet = images
  lightboxIdx = index
  renderLightboxAt(lightboxIdx)
  const showNav = lightboxSet.length > 1
  lightboxPrevBtn.hidden = !showNav
  lightboxNextBtn.hidden = !showNav
  lightbox.classList.add('active')
  lightbox.setAttribute('aria-hidden', 'false')
}
function lightboxGoPrev() {
  if (lightboxSet.length < 2) return
  lightboxIdx = (lightboxIdx - 1 + lightboxSet.length) % lightboxSet.length
  renderLightboxAt(lightboxIdx)
}
function lightboxGoNext() {
  if (lightboxSet.length < 2) return
  lightboxIdx = (lightboxIdx + 1) % lightboxSet.length
  renderLightboxAt(lightboxIdx)
}
function closeLightbox() {
  lightbox.classList.remove('active')
  lightbox.setAttribute('aria-hidden', 'true')
}
lightboxClose.addEventListener('click', closeLightbox)
lightboxBackdrop.addEventListener('click', closeLightbox)
lightboxImg.addEventListener('click', closeLightbox)
lightboxPrevBtn.addEventListener('click', (e) => { e.stopPropagation(); lightboxGoPrev() })
lightboxNextBtn.addEventListener('click', (e) => { e.stopPropagation(); lightboxGoNext() })
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowLeft') lightboxGoPrev()
  if (e.key === 'ArrowRight') lightboxGoNext()
})

// ─── CONTACT MODAL ────────────────────────────────────────────────────────────
const contactModal    = document.getElementById('contact-modal')
const contactBtn      = document.getElementById('contact-btn')
const contactClose    = document.getElementById('contact-modal-close')
const contactBackdrop = document.getElementById('contact-modal-backdrop')

function openContact()  { contactModal.classList.add('active'); contactModal.removeAttribute('aria-hidden') }
function closeContact() { contactModal.classList.remove('active'); contactModal.setAttribute('aria-hidden', 'true') }

contactBtn.addEventListener('click', () => {
  if (contactModal.classList.contains('active')) closeContact()
  else openContact()
})
contactClose.addEventListener('click', closeContact)
contactBackdrop.addEventListener('click', closeContact)

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { closeModal(); closeContact() }
})

