const scrollingTop = (ref) => {
    ref.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start"
    });
};

export { scrollingTop };
