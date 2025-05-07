import ContentSection, { ContentSectionProps } from "@/components/content-4";

const blogPosts: ContentSectionProps[] = [
	{
		title: "ClickHouse: Don’t miss out on this database",
		description_1:
			"The aim of this article is to provide a quick introduction to ClickHouse for the Web Performance community. The article talks about some interesting Core Web Vitals queries and points to where we can find help about ClickHouse.",
		description_2:
			"During the past few years I was searching for a database that suits my hobby project Basic RUM. What I needed was an OLAP (Online analytical processing) database. It wasn’t just about finding a database that does the job but I also needed a database that is easy to work with, has great documentation and an amazing community.",
		link: "https://calendar.perfplanet.com/2021/clickhouse-dont-miss-out-on-this-database/",
	},
	{
		title:
			"Lessons learned from developing my Real User Monitoring system – Basic RUM",
		description_1:
			"When I blog I always write something that has practical value for readers but I also like to share a short story that relates to it. This is my intention in this article as well. This post will be a bit of story-telling and will give examples of how I do things on a lower level in Basic RUM.",
		description_2:
			"I’ve spent weeks/months for some of the ideas I write about here and I strongly believe that sharing my findings will help other people at least find the right direction in case they would like to build their own RUM system or just analyze performance data. At the end of the article, I touch upon the question “What’s next?”.",
		link: "https://calendar.perfplanet.com/2019/lessons-learned-from-developing-my-real-user-monitoring-system-basic-rum/",
	},
	{
		title: "Open source backend RUM tool. Wait! What?",
		description_1:
			"tl;dr: I’m currently working on an open source backend RUM tool called Basic RUM. The project is still at its concept stage and is helping me answer some questions at my full-time job.",
		description_2:
			"An alpha version is planned for the first quarter of 2019 but I’ve decided to spread the news earlier because I’ve noticed interest at different web performance meetups.",
		link: "hhttp://calendar.perfplanet.com/2018/open-source-backend-rum-tool-wait-what/",
	},
];

export default function BlogPage() {
	return (
		<section className="py-16 md:py-32">
			<div className="mx-auto max-w-5xl px-6">
				{blogPosts.map((post, index) => (
					<ContentSection key={index} {...post} />
				))}
			</div>
		</section>
	);
}
