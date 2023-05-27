export default function Avater({ image, following, blocked }: any) {
  return (
    <>
      <div
        className={`flex bg-black border-8 ${
          following ? "border-secondary " : "border-primary"
        } ${blocked ? " border-red-600" : ""}   rounded-full w-auto h-auto`}
      >
        <img
          src={image}
          alt=""
          className="flex rounded-full"
          width={100}
          height={100}
        />
      </div>
    </>
  );
}
