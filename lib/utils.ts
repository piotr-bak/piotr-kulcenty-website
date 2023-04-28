export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });

    //the below is a workaround for a known iOS Safari scrolling bug.
    //See: https://github.com/vercel/next.js/issues/37141
    setTimeout(() => {
        window.scroll({ top: -1, left: 0, behavior: "smooth" }); // scroll to top again after 25ms!
    }, 25);
    // This should be any number larger than 16.8
};
