const products = [
    {
        id: '1',
        name: 'Monitor Gamer 24" 144Hz',
        price: 250000,
        category: 'monitores',
        img: '/img/monitor-1.jpg',
        stock: 10,
        description: 'Monitor Full HD de 24 pulgadas con 144Hz y panel IPS.',
        warranty: '12 meses de garantía oficial',
        specs: ['Resolución 1920x1080', 'Frecuencia 144Hz', 'Panel IPS', 'HDMI y DisplayPort'],
    },
    {
        id: '2',
        name: 'Monitor Curvo 27" QHD',
        price: 380000,
        category: 'monitores',
        img: '/img/monitor-2.jpg',
        stock: 5,
        description: 'Monitor curvo de 27 pulgadas con resolución QHD.',
        warranty: '12 meses de garantía oficial',
        specs: ['Resolución 1920×1080 FHD', 'Frecuencia 120Hz', 'Panel IPS', 'HDMI y DisplayPort'],
    },
    {
        id: '3',
        name: 'Placa Madre AM5 B650',
        price: 220000,
        category: 'placas madre',
        img: '/img/placa-1.jpg',
        stock: 8,
        description: 'Placa madre socket AM5 con soporte DDR5 y PCIe 4.0.',
        warranty: '12 meses de garantía oficial',
        specs: ['Socket AM5', 'Chipset AM5 B650', 'Soporte DDR5', 'PCIe 4.0', 'Conectividad USB'],
    },
    {
        id: '4',
        name: 'Placa Madre LGA1700 Z790',
        price: 310000,
        category: 'placas madre',
        img: '/img/placa-2.jpg',
        stock: 4,
        description: 'Placa madre socket LGA1700 con WiFi integrado.',
        warranty: '12 meses de garantía oficial',
        specs: ['Socket LGA1700', 'Chipset Intel Z790', 'Wi-Fi integrado', 'Soporte SSD M.2', 'Conectividad USB'],
    },
    {
        id: '5',
        name: 'Memoria RAM 16GB DDR5 5200MHz',
        price: 95000,
        category: 'memoria ram',
        img: '/img/ram-1.jpg',
        stock: 20,
        description: 'Módulo de memoria DDR5 de 16GB a 5200MHz.',
        warranty: '12 meses de garantía oficial',
        specs: ['Capacidad 16GB', 'Tipo DDR5', 'Frecuencia 5200MHz', 'Formato DIMM', 'Voltaje 1.1V'],
    },
    {
        id: '6',
        name: 'Kit Memoria RAM 32GB (2x16GB) DDR4',
        price: 120000,
        category: 'memoria ram',
        img: '/img/ram-2.jpg',
        stock: 12,
        description: 'Kit dual channel DDR4 de 32GB a 3200MHz.',
        warranty: '12 meses de garantía oficial',
        specs: ['Capacidad 32GB (2x16GB)', 'Tipo DDR4', 'Frecuencia 3200MHz', 'Dual Channel', 'Formato DIMM'],
    },
    {
        id: '7',
        name: 'Procesador 8 núcleos 4.5GHz',
        price: 340000,
        category: 'procesadores',
        img: '/img/cpu-1.jpg',
        stock: 7,
        description: 'Procesador de 8 núcleos y 16 hilos, ideal para gaming.',
        warranty: '12 meses de garantía oficial',
        specs: ['Núcleos 8', 'Hilos 16', 'Frecuencia máxima 4.5GHz', 'Arquitectura 64 bits', 'Uso recomendado Gaming'],
    },
    {
        id: '8',
        name: 'Procesador 6 núcleos 4.2GHz',
        price: 210000,
        category: 'procesadores',
        img: '/img/cpu-2.jpg',
        stock: 15,
        description: 'Procesador de 6 núcleos y 12 hilos, excelente relación precio-rendimiento.',
        warranty: '12 meses de garantía oficial',
        specs: ['Núcleos 6', 'Hilos 12', 'Frecuencia máxima 4.2GHz', 'Arquitectura 64 bits', 'Uso recomendado Gaming y productividad'],
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(products)
        }, 2000)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const product = products.find((prod) => prod.id === productId)

        if (product) {
            resolve(product)
        } else {
            reject(new Error('El producto no existe'))
        }
        }, 1500)
    })
}