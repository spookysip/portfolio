interface Props {
  color: string;
}

export default function Link({ color }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 40 45"
    >
      <path
        id="Icon_awesome-arrow-right"
        data-name="Icon awesome-arrow-right"
        d="M13.395,4.7l1.561-1.561a1.681,1.681,0,0,1,2.384,0L31.008,16.8a1.681,1.681,0,0,1,0,2.384L17.339,32.857a1.681,1.681,0,0,1-2.384,0L13.395,31.3a1.689,1.689,0,0,1,.028-2.412L21.9,20.813H1.688A1.683,1.683,0,0,1,0,19.125v-2.25a1.683,1.683,0,0,1,1.688-1.687H21.9L13.423,7.116A1.677,1.677,0,0,1,13.395,4.7Z"
        transform="translate(-1.872 20.404) rotate(-45)"
        fill={color}
      />
    </svg>
  );
}
