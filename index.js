function on(eventType, element, selector, fn) {
  if (!(element instanceof Element)) {
    element = document.querySelector(element)
  }
  element = addEventListener(eventType, (e) => {
    const t = e.target
    if (t.matches(selector)) {
      fn(e)
    }
  })
}
on('click', '#div1', 'button', () => {
  console.log('buton被点击了')
})