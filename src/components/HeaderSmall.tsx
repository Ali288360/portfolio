interface Props {
  text: string;
}
export default function HeaderSmall({ text }: Props) {
  return (
    <>
      <div className="flex items-center">
        <hr className="w-16 sm:w-24 mr-1 border-violet-400" />
        <h4 className="font-light gradient-text text-sm md:text-sm">{text}</h4>
      </div>
    </>
  );
}
