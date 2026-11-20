import {
  ArrowUpRight,
  BarChart3,
  FileSpreadsheet,
  Table2,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { projects, type Project } from '../data/content';
import { SectionHeading, useReveal } from './Section';

function ToolBadge({ tool }: { tool: string }) {
  const Icon =
    tool === 'Microsoft Excel'
      ? FileSpreadsheet
      : tool === 'Power BI'
        ? BarChart3
        : Table2;

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-line bg-ink/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-text-muted">
      <Icon size={12} className="text-accent" />
      {tool}
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [isImageOpen, setIsImageOpen] = useState(false);

  const hasStats = Boolean(project.stats?.length);

  return (
    <>
      <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink-line bg-ink-card/70 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-cardHover">

        {/* Tool */}
        <div className="flex items-center gap-3 bg-ink/40 px-6 py-4 sm:px-7">
          {project.tools.map((tool) => (
            <ToolBadge key={tool} tool={tool} />
          ))}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6 sm:p-7">

          <h3 className="font-display text-2xl font-semibold text-text">
            {project.name}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            {project.description}
          </p>

          {/* Stats */}
          {hasStats && (
            <dl className="mt-5 grid grid-cols-1 gap-2.5 rounded-2xl border border-ink-line bg-ink/50 p-5 sm:grid-cols-2">
              {project.stats!.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-ink-card/80 p-3.5 transition-colors duration-300 group-hover:border-accent/20"
                >
                  <dt className="text-[11px] font-semibold uppercase tracking-wider text-text-faint">
                    {stat.label}
                  </dt>

                  <dd className="mt-1 text-sm font-bold text-accent-light sm:text-[0.95rem]">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}

          {/* View Project */}
          <div className="mt-auto pt-6">
            <button
              type="button"
              onClick={() => setIsImageOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-ink-deep hover:shadow-card"
            >
              View Project

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </div>
        </div>
      </article>

      {/* Image Modal */}
      {isImageOpen && project.image && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsImageOpen(false)}
        >
          {/* Centered image area */}
          <div
            className="absolute left-1/2 top-1/2 flex max-h-[90vh] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Close button */}
            <button
              type="button"
              onClick={() => setIsImageOpen(false)}
              aria-label="Close project image"
              className="absolute -right-3 -top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-ink-line bg-ink-card text-text transition-all duration-200 hover:bg-accent hover:text-ink-deep"
            >
              <X size={19} />
            </button>

            {/* Project image */}
            <img
              src={project.image}
              alt={`${project.name} preview`}
              className="max-h-[85vh] max-w-[90vw] rounded-2xl border border-ink-line object-contain shadow-cardHover"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default function Projects() {
  const { ref, visible } = useReveal<HTMLDivElement>();

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

          <SectionHeading
            eyebrow="Projects"
            title="Selected work"
          />

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.name}
                project={project}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}