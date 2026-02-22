import ScrollReveal from "../ui/scroll-reveal";

export const Description = () => {
  return (
    <div className="mx-10 lg:mx-40 lg:px-20 lg:py-30 py-20">
      <ScrollReveal
        baseOpacity={0.1}
        enableBlur
        baseRotation={10}
        blurStrength={10}
        wordAnimationStart="top bottom-=30%"
        wordAnimationEnd="center center"
      >
        U.S. Meeting Oron, c’est plus qu’un car show : une fête dédiée aux
        véhicules américains et aux passionnés, des classiques restaurées aux
        pick-ups modernes.
      </ScrollReveal>
    </div>
  );
};
