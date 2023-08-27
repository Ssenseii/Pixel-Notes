# Things I learned:

- Use PNGs instead of SVGs with Pixel Art both in figma and on the web. (Performance boost)
- Customizing Scrollbars (though not apparent since I opted for noscrollbar)
- Checkboxes don't take background-image.
- HTMLLabel property: "htmlFor" needs an id.

## Ideas

- Stress button functionality with title div
- Animations
- top left notifications

## Problems

- Layout issues

## Thoughts

- If we want multiple themes, it's possible using svgs and the fill function. I wonder if you can manipulate svg when they're being used as background images.
  => after looking into it: the way aseprite saves SVGs is by saving every single pixel in its own tag with its own color data. assuming you can change background-image's fill: you'd have to change each fragment's color data individually
