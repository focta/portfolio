"use client";

import { useState } from "react";
import { CareerData } from "@/types";
import careerData from "@/data/career.json";

// 期間を日本語形式にフォーマットする関数
const formatPeriod = (start: string, end?: string): string => {
  const formatDate = (dateStr: string): string => {
    const [year, month] = dateStr.split("-");
    return `${year}年${parseInt(month)}月`;
  };

  const startFormatted = formatDate(start);
  if (!end) {
    return `${startFormatted} - 現在`;
  }
  const endFormatted = formatDate(end);
  return `${startFormatted} - ${endFormatted}`;
};

// 折りたたみ可能なプロジェクトコンポーネント
const ProjectItem = ({
  project,
  careerId,
}: {
  project: NonNullable<CareerData["careers"][number]["projects"]>[number];
  careerId: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const projectId = `${careerId}-project-${project.name}`;

  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
        aria-expanded={isOpen}
        aria-controls={projectId}
      >
        <span className="font-medium text-gray-900 dark:text-white">
          {project.name}
        </span>
        <svg
          className={`w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div id={projectId} className="p-4 pt-0 space-y-3">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {project.description}
          </p>
          {project.period && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              期間: {formatPeriod(project.period.start, project.period.end)}
            </p>
          )}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
          {project.links && (
            <div className="flex gap-4 pt-2">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  GitHub
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  デモ
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default function Career() {
  const data = careerData as CareerData;

  // 古い順（時系列順）でソート
  const sortedCareers = [...data.careers].sort((a, b) => {
    const dateA = new Date(a.period.start).getTime();
    const dateB = new Date(b.period.start).getTime();
    return dateA - dateB;
  });

  return (
    <section
      id="career"
      className="min-h-screen flex items-center justify-center px-4 py-16 bg-white dark:bg-black"
    >
      <div className="max-w-6xl w-full mx-auto">
        <div className="space-y-12">
          {/* セクションタイトル */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Career
            </h2>
            <div className="w-24 h-1 bg-gray-900 dark:bg-white mx-auto"></div>
          </div>

          {/* タイムライン */}
          <div className="relative">
            {/* 中央の縦線（デスクトップのみ） */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 transform -translate-x-1/2"></div>

            {/* キャリア項目 */}
            <div className="space-y-12">
              {sortedCareers.map((career, index) => (
                <div
                  key={career.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* タイムラインポイント（デスクトップのみ） */}
                  <div className="hidden md:block absolute left-1/2 w-4 h-4 bg-gray-900 dark:bg-white rounded-full transform -translate-x-1/2 border-4 border-white dark:border-black"></div>

                  {/* コンテンツカード */}
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                    }`}
                  >
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6 space-y-4">
                      {/* 役職と会社名 */}
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
                          {career.role}
                        </h3>
                        {career.company && (
                          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mt-1">
                            {career.company}
                          </p>
                        )}
                      </div>

                      {/* 期間 */}
                      <p className="text-sm md:text-base text-gray-500 dark:text-gray-500">
                        {formatPeriod(career.period.start, career.period.end)}
                      </p>

                      {/* 説明 */}
                      <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        {career.description}
                      </p>

                      {/* 成果 */}
                      {career.achievements &&
                        career.achievements.length > 0 && (
                          <div className="space-y-2">
                            <h4 className="text-sm md:text-base font-semibold text-gray-900 dark:text-white">
                              主な成果
                            </h4>
                            <ul className="space-y-1">
                              {career.achievements.map((achievement) => (
                                <li
                                  key={achievement}
                                  className="text-sm md:text-base text-gray-700 dark:text-gray-300 flex items-start"
                                >
                                  <span className="mr-2 text-gray-900 dark:text-white">
                                    •
                                  </span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                      {/* 開発案件 */}
                      {career.projects && career.projects.length > 0 && (
                        <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-800">
                          <h4 className="text-sm md:text-base font-semibold text-gray-900 dark:text-white">
                            開発案件
                          </h4>
                          <div className="space-y-2">
                            {career.projects.map((project) => (
                              <ProjectItem
                                key={project.name}
                                project={project}
                                careerId={career.id}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
