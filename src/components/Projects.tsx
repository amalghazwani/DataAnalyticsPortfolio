import {
  ArrowUpRight,
  BarChart3,
  FileSpreadsheet,
  Filter,
  Table2,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { projects, type Project } from '../data/content';
import { SectionHeading, useReveal } from './Section';

type ProjectsTranslations = {
  eyebrow: string;
  title: string;
  filters: {
    all: string;
    excel: string;
    powerBI: string;
  };
  caseStudy: string;
  keyMetrics: string;
  viewCaseStudy: string;
  noProjects: string;
};

type FilterType = 'All' | 'Microsoft Excel' | 'Power BI';

function ToolBadge({ tool }: { tool: string }) {
  const Icon =
    tool === 'Microsoft Excel'
      ? FileSpreadsheet
      : tool === 'Power BI'
        ? BarChart3
        : Table2;

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-line bg-ink/60 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-text-muted">
      <Icon size={12} className="text-accent" />
      {tool}
    </span>
  );
}

function ProjectCard({
  project,
  index,
  translations,
}: {
  project: Project;
  index: number;
  translations: ProjectsTranslations;
}) {
  const [isImageOpen, setIsImageOpen] = useState(false);

  const hasStats = Boolean(project.stats?.length);

  // Build the correct image path for both local development
  // and GitHub Pages deployment.
  const imageSrc = project.image
    ? `${import.meta.env.BASE_URL}${project.image.replace(/^\/+/, '')}`
    : undefined;

  return (
    <>
      <article
        style={{
          transitionDelay: `${index * 120}ms`,
        }}
        className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink-line bg-ink-card/70 shadow-card transition-all duration-700 hover:-translate-y-1 hover:border-accent/40 hover:shadow-cardHover"
      >
        <div className="flex items-center justify-between gap-4 border-b border-ink-line bg-ink/30 px-6 py-4 sm:px-7">
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <ToolBadge key={tool} tool={tool} />
            ))}
          </div>

          <span className="text-xs font-medium text-text-faint">
            {translations.caseStudy}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <div>
            <h3 className="font-display text-2xl font-semibold text-text sm:text-[1.7rem]">
              {project.name}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              {project.description}
            </p>
          </div>

          {hasStats && (
            <div className="mt-6">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                {translations.keyMetrics}
              </p>

              <dl className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {project.stats!.slice(0, 6).map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-ink-line bg-ink/40 p-3.5 transition-all duration-300 group-hover:border-accent/20"
                  >
                    <dt className="text-[10px] font-semibold uppercase tracking-wider text-text-faint">
                      {stat.label}
                    </dt>

                    <dd className="mt-1.5 text-xs font-bold leading-snug text-accent-light sm:text-sm">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          <div className="mt-auto pt-7">
            <button
              type="button"
              onClick={() => setIsImageOpen(true)}
              disabled={!imageSrc}
              className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-5 py-2.5 text-sm font-semibold text-accent transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-ink-deep hover:shadow-card disabled:cursor-not-allowed disabled:opacity-50"
            >
              {translations.viewCaseStudy}

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:rotate-[-90deg]"
              />
            </button>
          </div>
        </div>
      </article>

      {isImageOpen && imageSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-sm"
          onClick={() => setIsImageOpen(false)}
        >
          <div
            className="relative flex max-h-[90vh] max-w-[94vw] items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsImageOpen(false)}
              aria-label="Close project image"
              className="absolute -right-3 -top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-ink-line bg-ink-card text-text shadow-card transition-all duration-200 hover:bg-accent hover:text-ink-deep"
            >
              <X size={19} />
            </button>

            <img
              src={imageSrc}
              alt={`${project.name} preview`}
              className="max-h-[85vh] max-w-[94vw] rounded-2xl border border-ink-line object-contain shadow-cardHover"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default function Projects({
  translations,
}: {
  translations: ProjectsTranslations;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [filter, setFilter] = useState<FilterType>('All');

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((project) =>
          project.tools.includes(filter)
        );

  const filters: {
    label: string;
    value: FilterType;
  }[] = [
    {
      label: translations.filters.all,
      value: 'All',
    },
    {
      label: translations.filters.excel,
      value: 'Microsoft Excel',
    },
    {
      label: translations.filters.powerBI,
      value: 'Power BI',
    },
  ];

  return (
    <section id="projects" className="section-pad">
      <div ref={ref}>
        <div
          className={`transition-all duration-700 ease-out ${
            visible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-6 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow={translations.eyebrow}
              title={translations.title}
            />

            <div className="mb-10 flex flex-wrap items-center gap-2 rounded-full border border-ink-line bg-ink-card/50 p-1.5 md:mb-14">
              <div className="mr-1 flex h-8 w-8 items-center justify-center text-text-faint">
                <Filter size={15} />
              </div>

              {filters.map(({ label, value }) => {
                const isActive = filter === value;

                return (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setFilter(value)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                      isActive
                        ? 'bg-accent text-ink-deep shadow-card'
                        : 'text-text-muted hover:bg-accent/10 hover:text-accent-light'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.name}
                project={project}
                index={index}
                translations={translations}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="rounded-3xl border border-dashed border-ink-line bg-ink-card/40 p-10 text-center">
              <p className="text-sm text-text-muted">
                {translations.noProjects}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
