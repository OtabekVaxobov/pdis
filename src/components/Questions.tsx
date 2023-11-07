import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export function Questions() {
    return (
        <div className="flex flex-col justify-center pt-8">
            <p className="flex justify-center">Kop beriladigan savollar</p>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Asab kasalliklarining kelib chiqish sabablari?</AccordionTrigger>
                    <AccordionContent className="p-4">
                        Bu kasalliklar kelib chiqishiga sabablar juda ko&apos;p. Bular ichki va tashqi omillar ta'sirida yuzaga chiqadi.
                        <ul>
                            <br />
                            <li>
                                Ichki sabablarni ko&apos;rib chiqadigan bo&apos;lsak, turli xil somatik, nevrologik kasalliklar bilan og&apos;rish, bosh miyaning o&apos;tkir qon aylanishi buzilishi, bosh miya jarohatlarini surunkali nerv mushak o&apos;tkazuvchanligi buzilishi kasalliklari, kasallikning uzoq davom etishi, turli xil preparatlarni uzoq davr ichish kabi holatlar natijasida bemorlarda asab tizimi astinezatsiyasi yuzaga kelishi mumkin.
                            </li>
                            <li>
                                Endi tashqi faktorlarga keladigan bo&apos;lsak, zamona shiddati, noto&apos;g&apos;ri yashash tarzi, kunning noto&apos;g&apos;ri tashkil qilinishi, ya'ni ish va dam olishning me'yorlashmagani, uyqusizlik, jismoniy imkoniyatlarni hisobga olmay organizmga beriladigan turli zo&apos;riqishlar, vaqtida ovqatlanmaslik, shuningdek noto&apos;g&apos;ri ovqatlanish sabab bo&apos;lishi mumkin.
                            </li>
                            <li>
                                Bundan tashqari, ish joylarining to&apos;g&apos;ri tashkil qilinmasligi: yorug&apos;likning yetarli bo&apos;lmasligi, shovqin, binoning havo sirkulyatsiyasi noto&apos;g&apos;ri bo&apos;lgan dim xonalarda uzoq muddat bir xil holatda o&apos;tirib ishlash ham asab tizimi astenizatsiyasiga olib kelishi mumkin.
                            </li>
                            <li>
                                Bu holatning o&apos;smir yoshdagi bolalarda uchrashiga sabab oilaviy muhitning ta'siri ham bo&apos;lishi mumkin. Oilada yo&apos;qotishlar bo&apos;lganda yoki doimiy qattiq nazorat bo&apos;lishi, bolada erkinlik va o&apos;ziga baho berish hissining bo&apos;g&apos;ib qo&apos;yilgan holatlar ham asab tizimi zo&apos;riqishiga olib keladi.
                            </li>
                        </ul>


                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Asab kasallilarikni oldini olish</AccordionTrigger>
                    <AccordionContent className="p-4">
                        <ul>
                            <li>
                                Ma&apos;lumki, kasallikni davolashdan uning oldini olish afzal. Shuning uchun asab tizimi zo&apos;riqishi, astinevrotik sindrom, depressiya kabi holatlarga tushmaslikning oldini olish eng muhim davo hisoblanadi.
                            </li>
                            <li>
                                Buning uchun, avvalo to&apos;g&apos;ri yashash tarzini yo&apos;lga qo&apos;yish kerak. Ish va dam olish faoliyati to&apos;g&apos;ri taqsimlanishi, sport bilan shug&apos;ullanish, o&apos;z vaqtida ovqatlanishni amalga oshirish bu kasallikka chidamlilikni oshiradi.
                            </li>
                        </ul>


                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>NEVROZ nima?</AccordionTrigger>
                    <AccordionContent className="p-4">
                        <ul>
                            <li>
                                Nevroz, psixonevroz, nevrotik buzilish, nevroz kasalligi (qadimgi yunon. νεῦρον «asab» dan yangi lot. neurosis) — uzoq davom etadigan funktsional psixogen buzilishlar majmuasi. Bunday buzilishlarning klinik tasviri astenik, o&apos;rnashib qoladigan fikrlar yoki jazava belgilari, shuningdek, aqliy va jismoniy mehnat qobiliyatining vaqtinchalik pasayishi bilan ta&apos;riflanadi.</li>
                            <li>
                                Barcha hollarda psixogen omillar bu nizolar (ichki yoki tashqi), psixologik travmaga olib keladigan vaziyatlar ta&apos;siri, stress yoki uzoq vaqt mobaynida psixika hissiy va aqliy sferasining zo&apos;riqishi bo&apos;ladi.

                                «Nevroz» tushunchasi tibbiyotga 1776-yilda shotlandiyalik shifokor Uilyam Kallen tomonidan kiritilgan. Terminning mazmuni qayta-qayta boshqatdan ko&apos;rib chiqilgan, lekin hozirgacha uning umume&apos;tirof qilingan ta&apos;rifi yo&apos;q. Shuni ham ta&apos;kidlab o&apos;tish kerakki, tibbiyot va biologiyada oliy asab faoliyatining turli funktsional buzilishlari ham «nevroz» deb nomlanadi.
                            </li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}