import { SkillsData } from "@/types";
import skillsData from "@/data/skills.json";

// カテゴリ名の日本語マッピング
const categoryLabels: Record<string, string> = {
  frontend: "フロントエンド",
  backend: "バックエンド",
  tool: "ツール",
  other: "その他",
};

// カテゴリの表示順序
const categoryOrder: Array<"frontend" | "backend" | "tool" | "other"> = [
  "frontend",
  "backend",
  "tool",
  "other",
];

// レベルを星で表示するコンポーネント
const LevelStars = ({ level }: { level: number }) => {
  const maxLevel = 5;
  const clampedLevel = Math.max(0, Math.min(maxLevel, level));
  const filledStars = clampedLevel;
  const emptyStars = maxLevel - clampedLevel;

  return (
    <div
      className="flex items-center gap-1"
      aria-label={`レベル ${clampedLevel} / ${maxLevel}`}
    >
      {Array.from({ length: filledStars }).map((_, i) => (
        <span key={`filled-${i}`} className="text-yellow-500">
          ★
        </span>
      ))}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <span key={`empty-${i}`} className="text-gray-300 dark:text-gray-600">
          ★
        </span>
      ))}
    </div>
  );
};

export default function Skills() {
  const data = skillsData as SkillsData;

  // カテゴリごとにスキルをグループ化
  const skillsByCategory = categoryOrder.reduce((acc, category) => {
    acc[category] = data.skills.filter((skill) => skill.category === category);
    return acc;
  }, {} as Record<string, typeof data.skills>);

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-4 py-16 bg-white dark:bg-black"
    >
      <div className="max-w-4xl w-full mx-auto">
        <div className="space-y-12">
          {/* セクションタイトル */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Skills
            </h2>
            <div className="w-24 h-1 bg-gray-900 dark:bg-white mx-auto"></div>
          </div>

          {/* カテゴリごとのスキル表示 */}
          <div className="space-y-10">
            {categoryOrder.map((category) => {
              const skills = skillsByCategory[category];
              if (skills.length === 0) return null;

              return (
                <div key={category} className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
                    {categoryLabels[category]}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex flex-col items-start p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800"
                      >
                        <div className="flex items-center justify-between w-full mb-2">
                          <span className="text-base md:text-lg font-medium text-gray-900 dark:text-white">
                            {skill.name}
                          </span>
                        </div>
                        {skill.level && <LevelStars level={skill.level} />}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
