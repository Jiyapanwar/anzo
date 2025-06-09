1. code karne se pehle destructure the website, matlab devide the website into components
2. set up TailwindCss
3. collect all the assets - fonts,images
4. start making components
5. Always try use the css systematically
6. After making the first page, start making the animations using gsap

# Remix icon : for icons

# TiltJs : this can be used for the tilted text we want in the website ( matlab jo text tilt hoga )

# gsap : for animations (gsap alone does not work very well with react), so use a dependency of gsap - gsap/react

🧩 Why use absolute?

- Pin something to the bottom/top of a section: absolute bottom-0
- Add floating elements like badges/icons absolute: top-0 right-0
- Overlap elements (e.g., image over text):
  absolute z-10
- Create banners or overlays:
  absolute inset-0 bg-black/50

e - mouse event that is happening
agar function ko mousemove mai directly pass karenge vo automatically call hoga but agar usko dusre ek function mai call hoga to jab mouse move hoga tabhi vo call hoga

clientX - x axis pe mouse ki value kya hai

useRef - kisi bhi element ko select karne ka kaam karta hai uski reference leta hai, jab hum directly kisi element ko document.querySelector se select karte hai vo directly select hota hai, but react bolta hai ki aap directly khud kuch matt karo, let me handle everything🥷

# ref.current - jis element ko humne select kiya hai for reference

# getBoundingClientRect() - koi bhi rectangular shape matlab koi bhi div, h1, koi bhi block element uski dimensions pata karne mai help karta hai

transforn - rotateX()
transform property allows you to visually manipulate elements (like rotate, scale, move, or skew them) without affecting the actual layout.

- translate(x, y):
  Moves an element left/right (x) and up/down (y)
- scale(x, y):
  Resizes the element. 1 = 100%
- rotate(angle):
  Rotates the element (usually in degrees)
- skew(x, y):
  Skews element along the x and y axes
- matrix(a, b, c, d, e, f):
  Advanced 2D transformation Usually not used directly
- perspective(n):
  Defines 3D perspective (used with 3D transforms)

🚀 CSS Properties Commonly Used in Animations

- transition
- animation
- transform ()
- opacity (Great for fade in/out effects.)
- width, height
  (Used for expanding/collapsing elements.)
- background-color, color, border-color
  (Use for hover effects or dynamic styling changes.)
- filter (Applies visual effects like blur, brightness, contrast, etc.)

# hume chaiye ki this designer vala div centr point se rotate ho, not the center point of page but the center point of that div itself
