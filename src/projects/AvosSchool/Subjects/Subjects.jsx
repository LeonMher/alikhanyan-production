/** One pricing block: title + rows of label + price (no table markup). */
const PriceBlock = ({ title, leftHeading, rightHeading, rows }) => (
  <section className="w-full max-w-3xl mx-auto px-4 py-6">
    <h2 className="text-2xl md:text-[30px] font-semibold text-center text-[#20605e] mb-4">
      {title}
    </h2>
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <div
        className="hidden sm:grid sm:grid-cols-[1fr_1.2fr] gap-4 px-4 py-2.5 bg-gray-50 text-sm font-semibold text-gray-600 border-b border-gray-200"
        aria-hidden
      >
        <span>{leftHeading}</span>
        <span className="text-right">{rightHeading}</span>
      </div>
      <ul className="divide-y divide-gray-100 list-none m-0 p-0">
        {rows.map((row) => (
          <li key={row.id} className="px-4 py-3.5">
            {row.label ? (
              <div className="flex flex-col sm:grid sm:grid-cols-[1fr_1.2fr] sm:gap-4 sm:items-start">
                <span className="font-medium text-gray-900">{row.label}</span>
                <span className="text-gray-700 sm:text-right mt-1 sm:mt-0">
                  {row.value}
                </span>
              </div>
            ) : (
              <p className="text-gray-700 text-center sm:text-left m-0">
                {row.value}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const Subjects = () => {
  const groupClasses = [
    {
      id: 1,
      label: "Հարվածային գործիքներ",
      value: "8 դասը՝ 20.000 AMD",
    },
    {
      id: 2,
      label: "Դհոլ",
      value: "8 դասը՝ 10.000 դրամ",
    },
    {
      id: 3,
      label: "Կիթառ",
      value: "8 դասը՝ 15.000 դրամ, խմբում 2-3 աշակերտ",
    },
    {
      id: 4,
      label: "Դաշնամուր",
      value: "Միայն անհատական դասեր",
    },
    {
      id: 5,
      label: "Ջութակ",
      value: "Միայն անհատական դասեր",
    },
    {
      id: 6,
      label: "Պար",
      value: "12 դասը՝ 15.000 դրամ",
    },
  ];

  const personalTeaching = [
    {
      id: 1,
      label: "Հարվածային գործիքներ",
      value:
        "8 դասը՝ 50.000 AMD, մաստեր կլասս 1 դասը՝ 10.000 դրամ",
    },
    {
      id: 2,
      label: "Դհոլ",
      value: "8 դասը՝ 40.000 դրամ, մաստեր կլասս 1 դասը՝ 10.000 դրամ",
    },
    {
      id: 3,
      label: "Վոկալ",
      value:
        "8-13 տ. 1 դասը՝ 5.000 դրամ, 13 տ.-ից բարձր 1 դասը՝ 6.000 դրամ",
    },
    { id: 4, label: "Կիթառ", value: "1 դասը՝ 5.000 դրամ" },
    { id: 5, label: "Դաշնամուր", value: "1 դասը՝ 5.000 դրամ" },
    {
      id: 6,
      label: "Ջութակ",
      value:
        "8-13 տ. 1 դասը՝ 5.000 դրամ, 13 տ.-ից բարձր 1 դասը՝ 6.000 դրամ",
    },
    {
      id: 7,
      label: "Պար",
      value: "Անհատական 8 դասը՝ 25.000 դրամ",
    },
  ];

  const afterSchoolRows = [
    {
      id: 1,
      label: "4-7",
      value: "Անհատական 1 դասը` 3.000 դրամ",
    },
    {
      id: 2,
      label: "8-12",
      value: "Անհատական 1 դասը` 4.000 դրամ",
    },
    {
      id: 3,
      label: "0 մակարդակ",
      value: "1 դաս- 3.000 դրամ, խմբայինը` 2.000 դրամ",
    },
    {
      id: 4,
      label: null,
      value: "8 անհատական դաս- 30.000 դրամ",
    },
  ];

  const lessonPreparation = [
    {
      id: 1,
      label: "1-3-րդ դասարան",
      value: "45.000 դրամ",
    },
    {
      id: 2,
      label: "4-6-րդ դասարան",
      value: "60.000 դրամ",
    },
    {
      id: 3,
      label: "7-9-րդ դասարան",
      value: "80.000 դրամ",
    },
  ];

  return (
    <div className="w-full bg-gray-50/80 pb-4">
      <PriceBlock
        title="Խմբային դասեր"
        leftHeading="բաժիններ"
        rightHeading="գին"
        rows={groupClasses}
      />
      <PriceBlock
        title="Անհատական դասեր"
        leftHeading="բաժիններ"
        rightHeading="գին"
        rows={personalTeaching}
      />
      <PriceBlock
        title="After School"
        leftHeading="Դասարան"
        rightHeading="գին"
        rows={afterSchoolRows}
      />
      <PriceBlock
        title="Դասապատրաստում"
        leftHeading="Դասարան"
        rightHeading="գին"
        rows={lessonPreparation}
      />
      <p className="max-w-3xl mx-auto px-4 py-6 text-gray-800 text-center sm:text-left leading-relaxed">
        Եթե ցանկանում եք օգտվել նաև տեղափոխություն և զբաղվածություն մինչև
        19.00 ծառայություններից, ապա դասապատրաստման արժեքին ավելանում է ևս
        35.000 դրամ։
      </p>
    </div>
  );
};

export default Subjects;
