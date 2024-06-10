export default function BoardsList({
}: {
}) {
  return (
    <div>
      <p className="pl-6 text-xs font-semibold uppercase leading-[15px] tracking-[2.4px] text-grey-medium">
        All Boards ({placeholderData.length})
      </p>
    </div>
  );
}
