const fecha = new Date('2024-10-15T16:59:13')
console.log(fecha.toLocaleString("es-ES",{
    year: "numeric",
    month:"long",
    day:"2-digit",
    hour: "2-digit",
    minute:"2-digit",
    hour12: true,
    dayPeriod:"long",
    timeZone: "Asia/Seoul",
}))