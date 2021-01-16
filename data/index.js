import React from 'react'

const images = {
    noel: 'https://cdn.dribbble.com/users/3281732/screenshots/9165292/media/ccbfbce040e1941972dbc6a378c35e98.jpg',
    man: 'https://cdn.dribbble.com/users/3281732/screenshots/6784133/samji_illustrator.jpeg',
    woman: 'https://cdn.dribbble.com/users/3281732/screenshots/10940512/media/b2a8ea95c550e5f09d0ca07682a3c0da.jpg',
    ballom: 'https://cdn.dribbble.com/users/577645/screenshots/14939775/media/275d547d9ffee85fd1a9379fd10e9211.jpg',
    fox: 'https://cdn.dribbble.com/users/10882/screenshots/14941053/media/a6e6d6800180b303bf6e600e05f5a699.png',
}

export const data = Object.keys(images).map((i) => ({
    key: i,
    title: i,
    image: images[i],
    ref: React.createRef()
}))