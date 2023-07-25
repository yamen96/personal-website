export class Animator {
  direction = 0;
  delay = 0;
  duration = 0.5;
  animateOnView = false;

  withDirection( direction ) {
    this.direction = direction;
    return this;
  }

  withDelay( delay ) {
    this.delay = delay;
    return this;
  }

  withNoDelay() {
    this.delay = 0;
    return this;
  }

  withTinyDelay() {
    this.delay = 0.2;
    return this;
  }

  withSmallDelay() {
    this.delay = 0.5;
    return this;
  }

  withMediumDelay() {
    this.delay = 1;
    return this;
  }

  withLongDelay() {
    this.delay = 1.5;
    return this;
  }

  /** Set a Duration in seconds */
  withDuration( duration ) {
    this.duration = duration;
    return this;
  }

  /** a Duration of 0.5 second */
  withTinyDuration() {
    this.duration = 0.5;
    return this;
  }

  /** a Duration of 0.7 second */
  withShortDuration() {
    this.duration = 0.7;
    return this;
  }

  /** a Duration of 1 second */
  withNormalDuration() {
    this.duration = 1;
    return this;
  }

  /** Starts animation when in viewport */
  shouldAnimateOnView() {
    this.animateOnView = true;
    return this;
  }

  /** Starts animation when page loads */
  shouldAnimateOnLoad() {
    this.animateOnView = false;
    return this;
  }

  getProps() {
    const initial = {
      opacity: 0,
      translateY: `${this.direction * 10}px`
    };
    const animate = {
        opacity: 1,
        translateY: "0px"
    };
    const transition = {
        delay: this.delay,
        duration: this.duration,
        ease: "easeInOut",
    };
    const whileInView = {
      opacity: 1,
      translateY: "0px"
    };
    const viewport = { once: true };

    return this.animateOnView ? 
      {initial, whileInView, transition, viewport} :
      {initial, animate, transition};    
  }

}
