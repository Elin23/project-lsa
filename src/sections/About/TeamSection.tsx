import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import TitleComponent from "../../components/common/TitleComponent/TitleComponent";
import TeamCard from "../../components/common/teamSection/TeamCard";
import TeamCardSkeleton from "../../components/skeletons/TeamCardSkeleton";
import Slider from "../../components/shared/Slider";
import Pagination from "../../components/shared/Pagination";

import member_1 from "../../assets/imgs/member-1.webp";
import member_2 from "../../assets/imgs/member-2.webp";
import member_3 from "../../assets/imgs/member-3.webp";
import member_4 from "../../assets/imgs/member-4.webp";

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  experience: string;
  image: string;
}

const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Haider Kareem Malik",
    role: "Direct Manager",
    experience: "20+ Years",
    image: member_1,
  },
  {
    id: 2,
    name: "Ahmed Raad Jalal",
    role: "EPC Project Manager",
    experience: "15+ Years",
    image: member_2,
  },
  {
    id: 3,
    name: "Mohammed Ali Hamza",
    role: "Senior Mechanical Engineer",
    experience: "12+ Years",
    image: member_3,
  },
  {
    id: 4,
    name: "Ahmed Ali Hamza",
    role: "HSE Manager",
    experience: "10+ Years",
    image: member_4,
  },

  /*
  {
    id: 5,
    name: "Team Member Five",
    role: "Project Engineer",
    experience: "9+ Years",
    image: member_1,
  },
  {
    id: 6,
    name: "Team Member Six",
    role: "Site Manager",
    experience: "11+ Years",
    image: member_2,
  },
  {
    id: 7,
    name: "Team Member Seven",
    role: "Civil Engineer",
    experience: "8+ Years",
    image: member_3,
  },
  {
    id: 8,
    name: "Team Member Eight",
    role: "Quality Manager",
    experience: "13+ Years",
    image: member_4,
  },
  {
    id: 9,
    name: "Team Member Nine",
    role: "Planning Engineer",
    experience: "7+ Years",
    image: member_1,
  },
  */
];

const TEAM_MEMBERS_PER_PAGE = 8;

export default function TeamSection() {
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] =
    useState<number>(1);

  const teamContainerRef =
    useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  const totalPages = Math.max(
    Math.ceil(
      teamData.length / TEAM_MEMBERS_PER_PAGE,
    ),
    1,
  );

  const safeCurrentPage = Math.min(
    currentPage,
    totalPages,
  );

  const paginatedTeamMembers = useMemo(() => {
    const startIndex =
      (safeCurrentPage - 1) *
      TEAM_MEMBERS_PER_PAGE;

    return teamData.slice(
      startIndex,
      startIndex + TEAM_MEMBERS_PER_PAGE,
    );
  }, [safeCurrentPage]);

  const skeletonItems = useMemo(() => {
    const skeletonCount = Math.min(
      Math.max(teamData.length, 4),
      TEAM_MEMBERS_PER_PAGE,
    );

    return Array.from(
      { length: skeletonCount },
      (_, index) => index,
    );
  }, []);

  const handlePageChange = (page: number) => {
    const nextPage = Math.min(
      Math.max(page, 1),
      totalPages,
    );

    setCurrentPage(nextPage);

    window.requestAnimationFrame(() => {
      teamContainerRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  return (
    <section
      id="meet-the-experts"
      className="
        pb-16
        md:pb-20
        lg:pb-24
        xl:pb-28
      "
    >
      <div className="mb-10">
        <TitleComponent
          title="Meet the Experts"
          description="A team of seasoned engineers, project managers, and field specialists driving every LSA project from design to delivery."
        />
      </div>

      <div
        ref={teamContainerRef}
        className="scroll-mt-24"
      >
        {/* Mobile Slider */}
        <div className="w-full min-w-0 sm:hidden">
          {loading ? (
            <TeamCardSkeleton />
          ) : (
            <Slider
              items={teamData}
              autoPlayDelay={4000}
              showDots
              renderItem={(member) => (
                <TeamCard member={member} />
              )}
            />
          )}
        </div>

        {/* Tablet and Desktop Grid */}
        <div
          className="
            hidden
            flex-wrap
            items-stretch
            justify-start
            gap-5
            sm:flex
          "
        >
          {loading
            ? skeletonItems.map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    w-[calc(50%_-_10px)]
                    lg:w-[calc(33.333333%_-_14px)]
                    xl:w-[calc(25%_-_15px)]
                  "
                >
                  <div className="w-full">
                    <TeamCardSkeleton />
                  </div>
                </div>
              ))
            : paginatedTeamMembers.map(
                (member) => (
                  <div
                    key={member.id}
                    className="
                      flex
                      w-[calc(50%_-_10px)]
                      lg:w-[calc(33.333333%_-_14px)]
                      xl:w-[calc(25%_-_15px)]
                    "
                  >
                    <div className="w-full">
                      <TeamCard
                        member={member}
                      />
                    </div>
                  </div>
                ),
              )}
        </div>

        {/* Tablet and Desktop Pagination */}
        {!loading && totalPages > 1 && (
          <div className="mt-10 hidden sm:block">
            <Pagination
              currentPage={safeCurrentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </section>
  );
}