interface LogoProps {
  width?: string;
  height?: string;
}

export const Logo = ({ width, height }: LogoProps): JSX.Element => (
  <svg
    className="h-24 w-48 fill-black dark:fill-white justify-center align-center"
    viewBox="0 0 1920 392"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: width ?? "100%", height: height ?? "100%"}}
  >
    <path
      d="M578.6 377.8c-47.2 0-70.2-25.1-70.2-76.7v-230c0-6.1-2.7-8.8-8.8-8.8h-23.8V14.1h50.9c24 0 34.7 10.7 34.7 34.7l.8 249.3c0 24.6 7 34.1 25 34.1 7.9 0 13.4-.5 13.5-.5l2.6-.2-.6 45.2-2.1.2c-.1-.1-10.4.9-22 .9zM967.9 378c-47.2 0-70.2-25.1-70.2-76.7V175.8c0-6.1-2.7-8.8-8.8-8.8H865v-53.4h51c24 0 34.7 10.7 34.7 34.7l.8 149.9c0 24.6 7 34.1 25 34.1 7.9 0 13.4-.5 13.5-.5l2.6-.2-.6 45.2-2.1.2c-.1 0-10.4 1-22 1zM762.8 377h-119v-48.2h23.8c6.1 0 8.8-2.7 8.8-8.8V171.2c0-6.1-2.7-8.8-8.8-8.8h-23.1v-46.8h49.8c23.8 0 35.3 10.6 35.3 32.3v16.2c0 1.9 0 3.6-.1 5.3 15.5-35.4 44.9-56.9 79-56.9 6.7 0 13.3 1 13.5 1l2 .3v53.6l-2.8-.7c-.1 0-6.5-1.5-14.2-1.5-31.5 0-58.9 23.1-69.9 58.8-4.3 14-7 32.8-7 49.2V320c0 6.1 2.7 8.8 8.8 8.8h23.8V377zM919.1 77.1c-17.6 0-31.9-14.3-31.9-32 0-17.6 14.3-31.9 31.9-31.9 17.6 0 31.9 14.3 31.9 31.9 0 17.7-14.3 32-31.9 32zM1291.3 377.1h-36.7c-24.8 0-33.2-4.7-44.7-25l-46.7-86.3c-4.8-8.4-15-9.4-23.3-9.4h-18.1l-.2 63.8c0 6.1 2.7 8.8 8.8 8.8h23.8v48h-119v-48.2h23.8c6.1 0 8.8-2.7 8.8-8.8V69.6c0-6.1-2.7-8.8-8.8-8.8h-23.1V14.1h51.1c19.2 0 34.8 15.6 34.8 34.8V210h20.5c6.4 0 18.2-1.3 25.1-10.3l60-84.2h62.1l-72.2 99.1c-7.9 10.7-14.1 16-17.4 18.3 3.5 2.3 9.6 7.5 15.6 18.8l38.1 69.5c3.6 7.1 7.6 8.9 19.8 8.9h18.1v47zM1449.4 383.2c-80.5 0-138.9-57.6-138.9-136.9 0-80.6 54-136.9 131.3-136.9 34.8 0 63.9 12.5 84.1 36 18.6 21.7 28.9 52.5 28.9 86.6 0 6.7-1.5 20-1.5 20.6l-.2 2.1h-186.9c4.3 56 45.9 81.1 85.9 81.1 42.7 0 73.2-29 73.5-29.3l2.1-2 23.8 39.1-1.3 1.3c-.6.5-39.6 38.3-100.8 38.3zm-81-169.1h130.8c-2.2-37-24.8-60.8-58-60.8-37.3-.1-65 23.2-72.8 60.8zM1902 377.8h-58.1c-24.1 0-34.8-10.7-34.8-34.8V222.2c0-37.3-7.8-62.1-45.9-62.1-37.8 0-68.8 24-79 61.2-3.1 8.9-4.5 19.3-4.5 33.9V343c0 24.1-10.7 34.8-34.8 34.8h-58.1V331h30.1c6.1 0 8.8-2.7 8.8-8.8l-.8-125.6c0-24.6-7-34.1-25-34.1-7.9 0-13.4.5-13.5.5l-2.6.2.6-45.2 2.1-.2c.1 0 10.4-1 22-1 37.9 0 60 16 67.4 49 10.3-18.6 38-55.7 96.3-55.7 61 0 90.7 33 90.7 100.8v111.2c0 6.1 2.7 8.8 8.8 8.8h30.1v46.9zM199 383.2c-85.5 0-128.9-46.5-128.9-138.2V71.1c0-6.1-2.7-8.9-8.9-8.9h-44V14h79.1c24.1 0 34.8 10.7 34.8 34.9l-.2 74.2V233c0 81.5 33.4 95 69.5 95 46.9 0 86.5-27.5 108.7-75.3 3.1-7.9 5.4-15.5 6.5-21.4 1.9-10.5 2.3-45.7 2.3-56.3l.3-99.2c1.2-43.2 37-62.9 70.3-62.9 11.6 0 44.8 1 45.1 1l2.2.1.6 48.2H434c-.2 0-24.1-.5-32.1-.5-18 0-25 9.6-25 34.2l.8 201.6c0 24.6 7 34.2 25 34.2 8 0 31.8-.5 32.1-.5h2.4l-.6 47-2.2.1c-.3 0-31.1 1-42.6 1-58.7 0-70.7-33.4-74.5-58.4l-.1-.7c-28.5 39.5-72.2 63-118.2 63z"/>
  </svg>
)