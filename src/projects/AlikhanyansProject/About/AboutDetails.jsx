import React from "react";

const AboutDetails = () => {
  return (
    <div className="flex flex-col gap-6 px-4 md:px-8 lg:px-16 py-12 bg-black text-gray-300 min-h-screen w-full">
      <h1 className="text-5xl font-bold mb-6">About Alikhanyan’s Project Orchestra</h1>
      <p className="text-lg leading-relaxed">
       Alikhanyan’s Project Orchestra-ն հիմնադրվել է 2019 թվականին՝ մեկ նպատակով․ ստեղծել բարձրակարգ, կենդանի երաժշտություն, որը ոչ միայն հնչում է, այլև զգացվում է։
      </p>
      <p className="text-lg leading-relaxed">
        
Նախագիծը համախմբում է 17 փորձառու և պրոֆեսիոնալ երաժիշտների՝
5 վոկալիստ (երգիչներ և երգչուհիներ) և 12 նվագակցող երաժիշտներ, ովքեր միասին ձևավորում են հագեցած, հզոր և բազմազան երաժշտական հնչողություն։
      </p>
      <p className="text-lg leading-relaxed">
        Alikhanyan’s Project Orchestra-ն իր գործունեության ընթացքում ելույթներ է ունեցել պետական և կառավարության կողմից կազմակերպվող պաշտոնական միջոցառումներում, ինչպես նաև հանդես է եկել տարբեր մասշտաբի հանդիսավոր և հանրային միջոցառումներում։
      </p>

      <p className="text-lg leading-relaxed">
Բացի կոմերցիոն ելույթներից, նախագիծը մեծ կարևորություն է տալիս սոցիալական պատասխանատվությանը՝ կազմակերպելով բարեգործական համերգներ մանկատների և ծերանոցների համար, որտեղ երաժշտությունը դառնում է ջերմության, ուշադրության և հոգատարության լեզու։

      </p>

      <p className="text-lg leading-relaxed">
        Նվագախումբն ունի ավելի քան 500 հաջողված ելույթների փորձ՝ հարսանիքների, ծննդյան միջոցառումների, սուրբ կնունքների, ընտանեկան տոների և այլ կարևոր իրադարձությունների շրջանակում։ Յուրաքանչյուր ելույթ կազմակերպվում է բարձր պրոֆեսիոնալ մակարդակով՝ ուշադրություն դարձնելով ինչպես երաժշտական որակին, այնպես էլ ընդհանուր մթնոլորտին ու հանդիսատեսի էմոցիային։

Alikhanyan’s Project Orchestra-ն պարզապես նվագախումբ չէ․
դա երաժշտական թիմ է, որը յուրաքանչյուր միջոցառում դարձնում է հիշարժան, զգացմունքային և անկրկնելի։
      </p>
      <div className="flex flex-row justify-around w-full mt-6">
        <div>
          <span className="text-red-900 font-bold text-4xl">10</span> + Years
        </div>
        <div>
          <span className="text-red-900 font-bold text-4xl">500</span> Live Shows
        </div>
      </div>
      <button
        className="mt-8 px-4 py-2 bg-red-900 text-white rounded hover:bg-red-700"
        onClick={() => window.history.back()}
      >
        Վերադառնալ
      </button>
    </div>
  );
};

export default AboutDetails;
