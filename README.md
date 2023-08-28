# Things I learned:

- Use PNGs instead of SVGs with Pixel Art both in figma and on the web. (Performance boost)
- Customizing Scrollbars (though not apparent since I opted for noscrollbar)
- Checkboxes don't take background-image.
- HTMLLabel property: "htmlFor" needs an id.
- Carets cannot be resized but you can set their color (still very much unsupported though. better not touch it)
- Focus works with input

## Ideas

- Stress button functionality with title div
- Animations
- top left notifications

## Problems

- Layout issues -> fixed
- Loading animation for notes - async loading?
- 

## Thoughts

- If we want multiple themes, it's possible using svgs and the fill function. I wonder if you can manipulate svg when they're being used as background images.
  => after looking into it: the way aseprite saves SVGs is by saving every single pixel in its own tag with its own color data. assuming you can change background-image's fill: you'd have to change each fragment's color data individually


## Performance

Goal: Sub 500ms.

### Attempt #1 

- TTFB: 72ms
- Onload Time: 536 ms
- First Contentful Paint: 553 ms
- Largest Contentful Paint: 553ms
- Time to Interactive: 553 ms
- Fully Load Time: 961ms

  => - Minifying resources