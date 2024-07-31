function useScrollbarWidth() {
  function calculateScrollbarWidth() {
    // Create a div with a scrollbar
    const div = document.createElement("div");
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.overflow = "scroll";
    div.style.position = "absolute";
    div.style.top = "-9999px";
    document.body.appendChild(div);

    const scrollbarWidth = div.offsetWidth - div.clientWidth;

    document.body.removeChild(div);

    return scrollbarWidth;
  }

  return calculateScrollbarWidth();
}

export default useScrollbarWidth;
