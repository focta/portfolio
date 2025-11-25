import { AboutMeData } from "@/types";
import aboutMeData from "@/data/about-me.json";

export default function AboutMe() {
  const data = aboutMeData as AboutMeData;

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 py-16 bg-white dark:bg-black"
    >
      <div className="max-w-4xl w-full mx-auto">
        <div className="space-y-12">
          {/* セクションタイトル */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gray-900 dark:bg-white mx-auto"></div>
          </div>

          {/* 詳細な自己紹介文 */}
          <div className="space-y-6">
            <p className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
              {data.bio}
            </p>
          </div>

          {/* 興味・関心事 */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
              興味・関心事
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.interests.map((interest) => (
                <li
                  key={interest}
                  className="flex items-start space-x-3 text-gray-700 dark:text-gray-300"
                >
                  <span className="text-gray-900 dark:text-white mt-1.5">
                    •
                  </span>
                  <span className="text-base md:text-lg">{interest}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 価値観（オプション） */}
          {data.values && data.values.length > 0 && (
            <div className="space-y-6 pt-6 border-t border-gray-200 dark:border-gray-800">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
                大切にしていること
              </h3>
              <div className="flex flex-wrap gap-3">
                {data.values.map((value) => (
                  <span
                    key={value}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-full text-sm md:text-base border border-gray-200 dark:border-gray-800"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
