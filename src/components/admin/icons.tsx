type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: (props: IconProps) => (
    <svg
      viewBox="0 0 48 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="#FFFFFF">
        <path d="M6.9 2.5h.6v8.6h-.6V10c-.2.4-.5.7-.9 1s-.8.4-1.3.4c-.4 0-.8-.1-1.2-.2-.4-.2-.7-.4-1-.7s-.5-.6-.6-1c-.2-.4-.3-.8-.3-1.2 0-.4.1-.8.2-1.2.2-.4.4-.7.7-1 .3-.3.6-.5 1-.7.4-.2.8-.2 1.2-.2.5 0 .9.1 1.3.4.4.2.7.6.9 1V2.5zm-2.1 8.2c.4 0 .8-.1 1.1-.3.3-.2.6-.5.7-.9.2-.4.3-.8.3-1.2 0-.5-.1-.9-.3-1.2s-.4-.7-.7-.9c-.3-.2-.7-.3-1.1-.3-.5 0-.9.1-1.2.3-.4.2-.7.5-.9.9-.2.4-.3.8-.3 1.2 0 .5.1.9.3 1.2.2.4.5.7.9.9.3.2.7.3 1.2.3zM11.4 11.3c-.5 0-1-.1-1.4-.4-.4-.3-.8-.6-1-1.1-.3-.5-.4-1-.4-1.5 0-.4.1-.8.2-1.2.2-.4.4-.7.6-1 .3-.3.6-.5.9-.7.3-.2.7-.2 1.1-.2.4 0 .8.1 1.2.2.4.2.7.4.9.7.3.3.5.6.6 1 .1.4.2.8.2 1.3H9.2c0 .4.2.8.4 1.1.2.3.5.6.8.8.3.2.7.3 1.1.3.4 0 .8-.1 1.2-.3.3-.2.6-.5.8-.9l.6.1c-.2.5-.6.9-1 1.3-.5.3-1 .5-1.7.5zM9.2 8h4.5c0-.4-.1-.8-.3-1.1-.2-.3-.5-.6-.8-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.6.5-.8.8-.2.4-.4.7-.4 1.1z"/>
      </g>
      <g fill="#1AC1BF">
        <path d="M19.1 11.3c-.5 0-1.1-.1-1.5-.3-.5-.2-.9-.5-1.3-.9-.4-.4-.6-.8-.9-1.3-.2-.5-.3-1-.3-1.6s.1-1.1.3-1.6c.2-.5.5-1 .9-1.3s.8-.7 1.3-.9c.5-.2 1-.3 1.6-.3.7 0 1.3.2 1.8.5s1 .7 1.4 1.2l-1.1.6c-.2-.3-.6-.6-.9-.8-.4-.2-.8-.3-1.2-.3-.4 0-.7.1-1.1.2-.3.2-.6.4-.9.6-.3.3-.5.6-.6.9-.1.4-.2.7-.2 1.2 0 .4.1.8.2 1.2s.3.7.6.9c.3.3.5.5.9.6.3.2.7.2 1.1.2.4 0 .8-.1 1.2-.3.4-.2.7-.4.9-.8l1.1.6c-.4.5-.8.9-1.4 1.2-.5.4-1.1.5-1.9.5zM23.3 11.2V5.4h1.2V6c.2-.2.4-.4.7-.6.3-.1.6-.2.9-.2.2 0 .4 0 .6.1l-.5 1.2c-.2-.1-.3-.1-.5-.1-.3 0-.5.1-.7.2-.2.2-.3.4-.5.6-.1.2-.2.4-.2.7v3.3h-1.2zM29.8 11.3c-.5 0-1-.1-1.4-.4-.4-.3-.8-.6-1-1.1-.3-.5-.4-1-.4-1.5 0-.4.1-.8.2-1.2.2-.4.4-.7.6-1 .3-.3.6-.5.9-.7.3-.2.7-.2 1.1-.2.4 0 .8.1 1.2.3.4.2.7.4.9.8.3.3.5.7.6 1.1.1.4.2.9.1 1.3h-4.4c.1.3.1.5.3.7s.3.4.5.6c.2.1.5.2.8.2.3 0 .6-.1.8-.2.2-.1.4-.3.6-.6l1.2.3c-.2.5-.6.9-1 1.3-.5.2-1 .3-1.6.3zm-1.7-3.5h3.3c0-.3-.1-.5-.3-.8s-.3-.4-.6-.5c-.2-.1-.5-.2-.8-.2-.3 0-.5.1-.8.2-.2.1-.4.3-.6.5-.1.3-.2.5-.2.8zM38.1 2.5h1.2v8.6h-1.2v-.8c-.2.3-.4.5-.7.7-.3.2-.7.3-1.1.3-.4 0-.8-.1-1.2-.2-.4-.2-.7-.4-1-.7s-.5-.6-.7-1c-.2-.4-.2-.8-.2-1.2 0-.4.1-.8.2-1.2.2-.4.4-.7.7-1 .3-.3.6-.5 1-.7.4-.2.8-.2 1.2-.2.4 0 .8.1 1.1.3.3.2.5.4.7.7V2.5zm-1.8 7.7c.3 0 .6-.1.9-.2.3-.2.5-.4.6-.7.1-.3.2-.6.2-1 0-.3-.1-.7-.2-.9-.1-.3-.3-.5-.6-.7-.3-.2-.5-.2-.9-.2-.3 0-.6.1-.9.3-.3.2-.5.4-.7.7-.2.3-.2.6-.2.9 0 .3.1.7.2.9.2.3.4.5.7.7.3.1.6.2.9.2zM41.3 4.6c-.2 0-.3-.1-.5-.2-.1-.1-.2-.3-.2-.5 0-.2.1-.3.2-.4.1-.1.3-.2.5-.2.2 0 .3.1.5.2.1.1.2.3.2.4 0 .2-.1.3-.2.5-.2.1-.4.2-.5.2zm-.7.8h1.2v5.8h-1.2V5.4zM46.3 6.6h-1.2v4.6h-1.2V6.6H43V5.4h.9V3.6h1.2v1.8h1.2v1.2z"/>
      </g>
      <g fill="#FFFFFF">
        <path d="M4.2 21.4c-.3 0-.6-.1-.9-.2-.3-.1-.6-.2-.8-.4-.2-.2-.4-.4-.5-.6l.5-.2c.1.2.2.3.4.5.2.1.4.2.6.3.2.1.5.1.7.1.3 0 .5 0 .7-.1.2-.1.4-.2.6-.4.1-.2.2-.4.2-.6 0-.2-.1-.4-.2-.5-.1-.2-.3-.3-.5-.4s-.5-.2-.7-.2c-.4-.1-.8-.2-1.1-.4-.3-.1-.5-.3-.7-.5-.2-.2-.3-.5-.3-.8 0-.3.1-.6.3-.9.2-.2.5-.4.8-.6.3-.1.7-.2 1-.2.5 0 .9.1 1.3.3.4.2.7.5.8.8l-.5.3c-.1-.2-.2-.3-.4-.5-.2-.1-.4-.2-.6-.3-.2-.1-.4-.1-.6-.1-.3 0-.5 0-.8.1-.2.1-.4.2-.6.4-.1.2-.2.4-.2.6 0 .2.1.4.2.5.1.1.3.2.5.3.2.1.5.2.8.3.4.1.7.2 1 .4.3.1.6.3.7.5.2.2.3.5.3.8 0 .3-.1.6-.3.9-.2.2-.5.4-.8.6-.2.1-.5.1-.9.1zM11.6 19.9l.6.3c-.3.4-.6.7-1 .9-.4.2-.8.3-1.3.3-.5 0-1-.1-1.4-.4-.4-.3-.8-.6-1-1.1-.3-.4-.4-.9-.4-1.5 0-.4 0-.8.2-1.2.2-.4.4-.7.6-1 .3-.3.6-.5.9-.7.3-.2.7-.2 1.1-.2.5 0 .9.1 1.3.3.4.2.7.5 1 .9l-.6.3c-.2-.3-.5-.5-.8-.7-.3-.2-.6-.2-.9-.2-.4 0-.8.1-1.1.3-.3.2-.6.5-.8.9-.2.4-.3.8-.3 1.2 0 .4.1.8.3 1.2.2.4.5.7.8.9.3.2.7.3 1.1.3.3 0 .7-.1 1-.2.3-.3.6-.5.8-.8zM15.7 21.5c-.5 0-1-.1-1.4-.4-.4-.3-.8-.6-1-1.1-.3-.5-.4-1-.4-1.5 0-.4.1-.8.2-1.2.2-.4.4-.7.6-1 .3-.3.6-.5.9-.7.3-.2.7-.2 1.1-.2.5 0 1 .1 1.4.4.4.3.8.6 1 1.1.3.5.4 1 .4 1.5 0 .4-.1.8-.2 1.2-.2.4-.4.7-.6 1-.3.3-.6.5-.9.7-.4.1-.8.2-1.1.2zm0-.7c.4 0 .8-.1 1.2-.3.3-.2.6-.5.8-.9.2-.4.3-.8.3-1.2 0-.4-.1-.8-.3-1.2-.2-.4-.5-.7-.8-.9-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.2.3-.3.2-.6.5-.8.9s-.3.8-.3 1.2c0 .5.1.9.3 1.2.2.4.5.7.8.9.3.2.7.3 1.1.3zM19.6 21.3v-5.8h.6v.9c.2-.3.5-.6.8-.8.3-.2.7-.3 1.1-.3.2 0 .4 0 .7.1l-.3.6c-.1 0-.3 0-.5 0-.3 0-.6.1-.9.2-.3.2-.5.4-.7.7-.2.3-.2.6-.2.9v3.4h-.6zM25.8 21.5c-.5 0-1-.1-1.4-.4-.4-.3-.8-.6-1-1.1-.3-.5-.4-1-.4-1.5 0-.4.1-.8.2-1.2s.4-.7.6-1c.3-.3.6-.5.9-.7.3-.2.7-.2 1.1-.2.4 0 .8.1 1.2.2.4.2.7.4.9.7s.5.6.6 1c.1.4.2.8.2 1.3h-5.1c0 .4.2.8.4 1.1.2.3.5.6.8.8.3.2.7.3 1.1.3.4 0 .8-.1 1.2-.3.3-.2.6-.5.8-.9l.6.1c-.2.5-.6.9-1 1.3-.4.3-.9.5-1.7.5zm-2.3-3.4H28c0-.4-.1-.8-.3-1.1-.2-.3-.5-.6-.8-.8-.3-.2-.7-.3-1.1-.3s-.8.1-1.1.3c-.3.2-.6.5-.8.8-.2.4-.4.7-.4 1.1z"/>
      </g>
    </svg>
  ),
  x: (props: IconProps) => (
    <svg
      {...props}
      height="23"
      width="23"
      viewBox="0 0 1200 1227"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
      />
    </svg>
  ),
  gitHub: (props: IconProps) => (
    <svg
      viewBox="0 0 438.549 438.549"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  farcaster: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_farcaster)">
        <path
          fillOpacity="0.78"
          fill="currentColor"
          d="M4.6,1.8H19v2.9h4.1l-0.9,2.9h-0.7v11.7c0.4,0,0.7,0.3,0.7,0.7v0.8h0.1c0.4,0,0.7,0.3,0.7,0.7v0.8h-7.4v-0.8c0-0.4,0.3-0.7,0.7-0.7h0.1v-0.8c0-0.3,0.2-0.6,0.5-0.6l0-6.4c-0.2-2.6-2.4-4.6-5.1-4.6c-2.7,0-4.8,2-5.1,4.6l0,6.4c0.4,0.1,0.8,0.3,0.8,0.6v0.8h0.1c0.4,0,0.7,0.3,0.7,0.7v0.8H0.9v-0.8c0-0.4,0.3-0.7,0.7-0.7h0.1v-0.8c0-0.4,0.3-0.7,0.7-0.7V7.6H1.6L0.7,4.7h3.8V1.8z"
        />
      </g>
      <defs>
        <clipPath id="clip0_farcaster">
          <rect x="0.7" y="1.8" width="22.5" height="20.3" />
        </clipPath>
      </defs>
    </svg>
  ),
  phone: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="#2DD4BF"
        d="M17.8,4.1V3.4c0-0.8-0.6-1.4-1.4-1.4c0,0,0,0,0,0H7.6c-0.8,0-1.4,0.6-1.4,1.4c0,0,0,0,0,0v0.8v15.7
        v0.8c0,0.8,0.6,1.4,1.4,1.4c0,0,0,0,0,0h8.8c0.8,0,1.4-0.6,1.4-1.4c0,0,0,0,0,0v-0.8V4.1z M10.9,2.8h2.2c0.1,0,0.3,0.1,0.3,0.3
        s-0.1,0.3-0.3,0.3h-2.2c-0.1,0-0.3-0.1-0.3-0.3S10.8,2.8,10.9,2.8L10.9,2.8z M14.3,21.2H9.7c-0.1,0-0.3-0.1-0.3-0.3s0.1-0.3,0.3-0.3
        h4.6c0.1,0,0.3,0.1,0.3,0.3S14.4,21.2,14.3,21.2z M16.6,19.9H7.4V4.1h9.2V19.9z"
      />
    </svg>
  ),
  menu: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  ),
  holonym: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M11.2,9.3h1.9c0.3,0,0.5-0.2,0.5-0.5s-0.2-0.5-0.5-0.5h-1.9c-0.3,0-0.5,0.2-0.5,0.5S10.9,9.3,11.2,9.3z"/>
      <path style={{fillOpacity: 0.5}} d="M11.2,9.3h1.9c0.3,0,0.5-0.2,0.5-0.5s-0.2-0.5-0.5-0.5h-1.9c-0.3,0-0.5,0.2-0.5,0.5S10.9,9.3,11.2,9.3z"/>
      <path style={{fillOpacity: 0.2}} d="M11.2,9.3h1.9c0.3,0,0.5-0.2,0.5-0.5s-0.2-0.5-0.5-0.5h-1.9c-0.3,0-0.5,0.2-0.5,0.5S10.9,9.3,11.2,9.3z"/>
      <path d="M14.4,12.4H10c-0.3,0-0.5-0.2-0.5-0.5c0-0.3,0.2-0.5,0.5-0.5h4.4c0.3,0,0.5,0.2,0.5,0.5C14.9,12.2,14.7,12.4,14.4,12.4z"/>
      <path style={{fillOpacity: 0.5}} d="M14.4,12.4H10c-0.3,0-0.5-0.2-0.5-0.5c0-0.3,0.2-0.5,0.5-0.5h4.4c0.3,0,0.5,0.2,0.5,0.5C14.9,12.2,14.7,12.4,14.4,12.4z"/>
      <path style={{fillOpacity: 0.2}} d="M14.4,12.4H10c-0.3,0-0.5-0.2-0.5-0.5c0-0.3,0.2-0.5,0.5-0.5h4.4c0.3,0,0.5,0.2,0.5,0.5C14.9,12.2,14.7,12.4,14.4,12.4z"/>
      <path d="M13.1,15.6h-1.9c-0.3,0-0.5-0.2-0.5-0.5c0-0.3,0.2-0.5,0.5-0.5h1.9c0.3,0,0.5,0.2,0.5,0.5C13.7,15.4,13.4,15.6,13.1,15.6z"/>
      <path style={{fillOpacity: 0.5}} d="M13.1,15.6h-1.9c-0.3,0-0.5-0.2-0.5-0.5c0-0.3,0.2-0.5,0.5-0.5h1.9c0.3,0,0.5,0.2,0.5,0.5C13.7,15.4,13.4,15.6,13.1,15.6z"/>
      <path style={{fillOpacity: 0.2}} d="M13.1,15.6h-1.9c-0.3,0-0.5-0.2-0.5-0.5c0-0.3,0.2-0.5,0.5-0.5h1.9c0.3,0,0.5,0.2,0.5,0.5C13.7,15.4,13.4,15.6,13.1,15.6z"/>
      <path style={{fillRule: 'evenodd', clipRule: 'evenodd'}} d="M12.2,5c-0.9-0.4-1.9-0.6-2.9-0.6c-4.2,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5c0.9,0,1.7-0.1,2.5-0.4c0.9,0.4,1.9,0.6,2.9,0.6c4.2,0,7.5-3.4,7.5-7.5s-3.4-7.5-7.5-7.5C13.8,4.6,13,4.7,12.2,5z M12.2,6.1c2.1,1.1,3.6,3.3,3.6,5.8c0,2.7-1.6,5-4,6c-2.1-1.1-3.6-3.3-3.6-5.8C8.2,9.4,9.9,7.1,12.2,6.1z M10.8,5.6c-2.2,1.3-3.7,3.7-3.7,6.5c0,2.6,1.3,4.8,3.3,6.2c-0.4,0.1-0.8,0.1-1.2,0.1c-3.6,0-6.5-2.9-6.5-6.5s2.9-6.5,6.5-6.5C9.8,5.4,10.3,5.5,10.8,5.6z M13.6,5.7c2,1.4,3.3,3.6,3.3,6.2c0,2.7-1.5,5.1-3.7,6.5c0.5,0.1,1,0.2,1.6,0.2c3.6,0,6.5-2.9,6.5-6.5s-2.9-6.5-6.5-6.5C14.3,5.6,13.9,5.6,13.6,5.7z"/>
      <path style={{fillRule: 'evenodd', clipRule: 'evenodd', fillOpacity: 0.5}} d="M12.2,5c-0.9-0.4-1.9-0.6-2.9-0.6c-4.2,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5c0.9,0,1.7-0.1,2.5-0.4c0.9,0.4,1.9,0.6,2.9,0.6c4.2,0,7.5-3.4,7.5-7.5s-3.4-7.5-7.5-7.5C13.8,4.6,13,4.7,12.2,5z M12.2,6.1c2.1,1.1,3.6,3.3,3.6,5.8c0,2.7-1.6,5-4,6c-2.1-1.1-3.6-3.3-3.6-5.8C8.2,9.4,9.9,7.1,12.2,6.1z M10.8,5.6c-2.2,1.3-3.7,3.7-3.7,6.5c0,2.6,1.3,4.8,3.3,6.2c-0.4,0.1-0.8,0.1-1.2,0.1c-3.6,0-6.5-2.9-6.5-6.5s2.9-6.5,6.5-6.5C9.8,5.4,10.3,5.5,10.8,5.6z M13.6,5.7c2,1.4,3.3,3.6,3.3,6.2c0,2.7-1.5,5.1-3.7,6.5c0.5,0.1,1,0.2,1.6,0.2c3.6,0,6.5-2.9,6.5-6.5s-2.9-6.5-6.5-6.5C14.3,5.6,13.9,5.6,13.6,5.7z"/>
      <path style={{fillRule: 'evenodd', clipRule: 'evenodd', fillOpacity: 0.2}} d="M12.2,5c-0.9-0.4-1.9-0.6-2.9-0.6c-4.2,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5c0.9,0,1.7-0.1,2.5-0.4c0.9,0.4,1.9,0.6,2.9,0.6c4.2,0,7.5-3.4,7.5-7.5s-3.4-7.5-7.5-7.5C13.8,4.6,13,4.7,12.2,5z M12.2,6.1c2.1,1.1,3.6,3.3,3.6,5.8c0,2.7-1.6,5-4,6c-2.1-1.1-3.6-3.3-3.6-5.8C8.2,9.4,9.9,7.1,12.2,6.1z M10.8,5.6c-2.2,1.3-3.7,3.7-3.7,6.5c0,2.6,1.3,4.8,3.3,6.2c-0.4,0.1-0.8,0.1-1.2,0.1c-3.6,0-6.5-2.9-6.5-6.5s2.9-6.5,6.5-6.5C9.8,5.4,10.3,5.5,10.8,5.6z M13.6,5.7c2,1.4,3.3,3.6,3.3,6.2c0,2.7-1.5,5.1-3.7,6.5c0.5,0.1,1,0.2,1.6,0.2c3.6,0,6.5-2.9,6.5-6.5s-2.9-6.5-6.5-6.5C14.3,5.6,13.9,5.6,13.6,5.7z"/>
    </svg>
  ),
  climateResilience: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="#2DD4BF"
        d="M21.7,2.9v2c0,1.9-0.8,3.7-2.1,5s-3.1,2.1-5,2.1h-1v1h5.1v7.1c0,0.5-0.2,1-0.6,1.4
        c-0.4,0.4-0.9,0.6-1.4,0.6H8.4c-0.5,0-1.1-0.2-1.4-0.6c-0.4-0.4-0.6-0.9-0.6-1.4V13h5.1v-3c0-1.9,0.8-3.7,2.1-5
        c1.3-1.3,3.1-2.1,5-2.1H21.7z M5.9,1.9c1.2,0,2.4,0.3,3.5,0.8c1.1,0.6,2,1.4,2.7,2.4c-1.1,1.4-1.7,3.1-1.7,4.9v1H10
        c-2,0-4-0.8-5.4-2.2C3.1,7.4,2.3,5.4,2.3,3.4V1.9H5.9z"
      />
    </svg>
  ),
  ecoTech: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Line">
        <path fill="#2DD4BF" d="M15.7,12h5L20,9.4h-4.8L15.7,12z" />
        <path fill="#2DD4BF" d="M9.8,8.5h4.4l-0.5-3.1h-3.4L9.8,8.5z" />
        <path fill="#2DD4BF" d="M8.8,9.4H4L3.3,12h5L8.8,9.4z" />
        <path fill="#2DD4BF" d="M15.1,8.5h4.7L19,5.7c-0.1-0.2-0.2-0.3-0.4-0.3h-4L15.1,8.5z" />
        <path fill="#2DD4BF" d="M14.8,12l-0.4-2.6H9.7L9.2,12H14.8z" />
        <path fill="#2DD4BF" d="M15.4,15.9l-0.5-3.1H9.1l-0.5,3.1h3v1.8h-1.3c-0.2,0-0.4,0.2-0.4,0.4s0.2,0.4,0.4,0.4h3.5
          c0.2,0,0.4-0.2,0.4-0.4s-0.2-0.4-0.4-0.4h-1.3v-1.8H15.4z" />
        <path fill="#2DD4BF" d="M16.3,15.9h4.9c0.2,0,0.4-0.2,0.5-0.4c0,0,0-0.1,0-0.1l-0.7-2.5h-5.1L16.3,15.9z" />
        <path fill="#2DD4BF" d="M2.8,15.9h4.9l0.5-3.1H3.1l-0.7,2.5c-0.1,0.2,0.1,0.5,0.3,0.5C2.7,15.9,2.7,15.9,2.8,15.9z" />
        <path fill="#2DD4BF" d="M9.4,5.4h-4C5.2,5.4,5,5.5,5,5.7L4.2,8.5h4.7L9.4,5.4z" />
      </g>
    </svg>
  ),
  address: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="#2DD4BF"
        d="M20.6,3.2H3.4v2.2h17.2V3.2z M21.7,14.2V12l-1.1-5.5H3.4L2.3,12v2.2h1.1v6.6h10.7v-6.6h4.3v6.6h2.1
        v-6.6H21.7z M12,18.6H5.6v-4.4H12V18.6z"
      />
    </svg>
  ),
  gmaps: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" fill="#5F6368" d="M12.1,19l0.8-0.3c0-0.1-0.2-0.2-0.3-0.2C12.4,18.5,12.1,18.6,12.1,19 M13.1,19.3l0.3,0.2c-0.1,0.1-0.3,0.4-0.7,0.4c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.8-0.9c0.4,0,0.7,0.3,0.8,0.7l-1.2,0.5c0.1,0.2,0.2,0.3,0.4,0.3C12.8,19.5,13,19.5,13.1,19.3 M11.1,19.8h0.4v-2.6h-0.4V19.8z M10.5,19c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C10.3,19.5,10.5,19.3,10.5,19z M10.8,18.2v1.6c0,0.7-0.4,0.9-0.8,0.9c-0.4,0-0.7-0.3-0.8-0.5L9.6,20c0.1,0.1,0.2,0.3,0.4,0.3c0.4,0,0.5-0.3,0.5-0.6h0c-0.1,0.1-0.3,0.2-0.5,0.2c-0.4,0-0.8-0.4-0.8-0.9c0-0.5,0.4-0.9,0.8-0.9c0.2,0,0.4,0.1,0.5,0.2h0v-0.1C10.5,18.2,10.8,18.2,10.8,18.2L10.8,18.2z M6.6,19c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5S6.6,19.3,6.6,19 M7,19c0,0.5-0.4,0.9-0.9,0.9S5.2,19.5,5.2,19c0-0.5,0.4-0.9,0.9-0.9S7,18.5,7,19 M8.6,19c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5C8.3,19.5,8.6,19.3,8.6,19 M8.9,19c0,0.5-0.4,0.9-0.9,0.9c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9C8.5,18.1,8.9,18.5,8.9,19 M3.7,19.9c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4c0.4,0,0.7,0.2,0.9,0.4l-0.3,0.3c-0.2-0.2-0.4-0.3-0.7-0.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1c0.4,0,0.6-0.1,0.7-0.3c0.1-0.1,0.2-0.3,0.2-0.5H3.7v-0.4H5c0,0.1,0,0.1,0,0.2c0,0.3-0.1,0.6-0.3,0.9C4.4,19.8,4.1,19.9,3.7,19.9"/>
      <path fill="#63666A" d="M14.3,19.8v-2.3h0.3l0.8,1.4h0l0.8-1.4h0.3v2.3h-0.3l0-1.8h0l-0.7,1.3h-0.2l-0.7-1.3h0c0,0.6,0,1.2,0,1.8H14.3z M17.4,19.9c-0.2,0-0.3,0-0.4-0.1s-0.2-0.2-0.2-0.4c0-0.2,0.1-0.3,0.2-0.4s0.3-0.1,0.5-0.1c0.2,0,0.3,0,0.4,0.1c0-0.3-0.2-0.4-0.4-0.4c-0.2,0-0.3,0.1-0.4,0.2l-0.3-0.1c0-0.1,0.1-0.2,0.2-0.3s0.3-0.1,0.4-0.1c0.2,0,0.4,0.1,0.5,0.2s0.2,0.3,0.2,0.5v1H18v-0.2C17.9,19.8,17.7,19.9,17.4,19.9L17.4,19.9z M18,19.1c-0.2-0.1-0.5-0.1-0.7,0c-0.1,0.1-0.1,0.3,0,0.4C17.6,19.7,18,19.4,18,19.1z M19.4,19.9c-0.1,0-0.2,0-0.3-0.1s-0.2-0.1-0.2-0.2h0l0,0.2v0.7h-0.3v-2.3h0.3v0.2h0c0-0.1,0.1-0.1,0.2-0.2s0.2-0.1,0.3-0.1c0.2,0,0.4,0.1,0.5,0.2c0.1,0.2,0.2,0.4,0.2,0.6c0,0.2-0.1,0.4-0.2,0.6C19.8,19.8,19.6,19.9,19.4,19.9L19.4,19.9z M19.4,19.6c0.1,0,0.3-0.1,0.4-0.2c0.1-0.1,0.1-0.2,0.1-0.4s0-0.3-0.1-0.4c-0.1-0.1-0.2-0.2-0.4-0.2c-0.1,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.1,0.2-0.1,0.4c0,0.2,0,0.3,0.1,0.4C19.1,19.5,19.2,19.6,19.4,19.6z M21,19.9c-0.2,0-0.3,0-0.4-0.1c-0.1-0.1-0.2-0.2-0.3-0.3l0.3-0.1c0.1,0.2,0.2,0.3,0.4,0.3c0.1,0,0.2,0,0.2-0.1c0.1,0,0.1-0.1,0.1-0.2c0-0.1-0.1-0.2-0.2-0.2l-0.3-0.1c-0.1,0-0.2-0.1-0.3-0.1c-0.1-0.1-0.1-0.2-0.1-0.3c0-0.1,0.1-0.3,0.2-0.3c0.1-0.1,0.3-0.1,0.4-0.1c0.1,0,0.3,0,0.4,0.1c0.1,0.1,0.2,0.2,0.2,0.3l-0.3,0.1c-0.1-0.1-0.2-0.2-0.4-0.2c-0.1,0-0.2,0-0.2,0.1s-0.1,0.1-0.1,0.1c0,0.1,0.1,0.2,0.2,0.2l0.3,0.1c0.1,0,0.3,0.1,0.3,0.2s0.1,0.2,0.1,0.3c0,0.1-0.1,0.3-0.2,0.4C21.4,19.8,21.2,19.9,21,19.9L21,19.9z"/>
      <path fill="#34A853" d="M10.3,12c0.4,0.5,0.7,1,0.9,1.4c0.2,0.4,0.3,0.8,0.5,1.3c0.1,0.3,0.2,0.4,0.4,0.4c0.2,0,0.3-0.2,0.4-0.4c0.2-0.5,0.3-0.9,0.5-1.3c0.8-1.5,2-2.5,2.7-3.9c0,0,0.5-0.9,0.5-2.1c0-1.1-0.5-1.9-0.5-1.9L10.3,12L10.3,12z"/>
      <path fill="#FBBC04" d="M8.4,9.4c0.4,1,1.3,1.9,1.9,2.7l3-3.6c0,0-0.4,0.6-1.2,0.6c-0.9,0-1.6-0.7-1.6-1.6c0-0.6,0.4-1,0.4-1C8.7,6.7,8.8,7.3,8.4,9.4L8.4,9.4z"/>
      <path fill="#4285F4" d="M13.4,3.5c1,0.3,1.9,1,2.4,2l-2.4,2.9c0,0,0.4-0.4,0.4-1c0-0.9-0.8-1.6-1.6-1.6c-0.8,0-1.2,0.6-1.2,0.6C11.1,6,13,3.6,13.4,3.5L13.4,3.5z"/>
      <path fill="#1A73E8" d="M9,4.8c0.6-0.7,1.7-1.5,3.1-1.5c0.7,0,1.2,0.2,1.2,0.2l-2.4,2.9C10.8,6.3,9.2,5.1,9,4.8L9,4.8z"/>
      <path fill="#EA4335" d="M8.4,9.4c0,0-0.4-0.8-0.4-1.9c0-1.1,0.4-2,1-2.6l1.9,1.6L8.4,9.4L8.4,9.4z"/>
    </svg>
  ),
};
