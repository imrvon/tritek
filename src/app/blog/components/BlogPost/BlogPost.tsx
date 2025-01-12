"use client";

import React, { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { BiSolidQuoteRight } from "react-icons/bi";
import Link from "next/link";
import "../../styles/blog.css"
import Image from "next/image";

interface PostType {
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
  date: string;
  _embedded?: {
    "wp:featuredmedia"?: {
      source_url: string;
      alt_text?: string;
    }[];
    "wp:term"?: { name: string }[][];
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<PostType | null>(null);
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const timestamp = new Date().getTime();

  useEffect(() => {
    async function fetchPostData() {
      try {
        // Fetch posts from the API
        const response = await fetch(
          `https://dev-tritek.pantheonsite.io/wp-json/wp/v2/posts?_embed&_=${timestamp}`
        );
        const posts = await response.json();

        // Find the specific post with the matching slug
        const matchingPost = posts.find((p: any) => p.slug === params.slug);

        if (!matchingPost) {
          notFound(); // Trigger 404 if no post is found
        } else {
          setPost(matchingPost);
        }

        // Set all posts as recent posts excluding the current post
        const filteredRecentPosts = posts.filter(
          (p: any) => p.slug !== params.slug
        );
        setRecentPosts(filteredRecentPosts);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPostData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl font-heading">Loading post...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl font-heading">Post not found</p>
      </div>
    );
  }

  // Extract details from the post object
  const { title, content, _embedded, excerpt } = post;

  console.log("post", post)
  console.log("Embedded media:", _embedded?.["wp:featuredmedia"]);

  const featuredImage = _embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
  const categories =
    _embedded?.["wp:term"]?.[0]?.map((term: any) => term.name).join(", ") ||
    "Uncategorized";

    function truncateTextByChars(text: string, charLimit: number): string {
      if (text.length <= charLimit) {
        return text; // Return the original text if it's within the limit
      }
    return text.slice(0, charLimit) + "..."; // Truncate text and add ellipsis
  }

  return (
    <div className="px-[5%] mt-12 lg:mt-20 py-10">
      <div className="flex items-center gap-2 text-gray-500 mb-2">
        <span className="font-semibold">{categories}</span>
      </div>
      <section className="flex flex-col md:flex-row gap-8 lg:gap-16 ">
        {/* Main Blog Post */}
        <div className=" w-full md:w-4/5  font-ibm">
          {/* Categories */}

          {/* Title */}
          <div>
            <h1 className="text-[2rem] md:text-[2.2rem] lg:text-[2.7rem] font-heading font-bold mb-4">
              {title?.rendered}
            </h1>
            {/* <h4 className="font-ibm italic font-medium text-[1.1rem] mb-8">
              {excerpt?.rendered?.replace(/<[^&>]+>/g, "")}{" "}
            </h4> */}
          </div>

          {/* Featured Image */}
          {featuredImage && (
            <div>
              <Image
                src={featuredImage}
                alt={title?.rendered}
                className="w-full h-[25rem] object-cover mb-6"
                height={100}
                width={100}
              />
            </div>
          )}

          {/* Content */}
          {/* <div className="text-base blogBody text-black font-nuno space-y-4">
            {content?.rendered
              ?.split("</p>") // Split by closing </p> tag
              .map((para, index) => {
                if (index === 1) {
                  // For the second paragraph, wrap it with blockquote and add the icon
                  return (
                    <div
                      key={index}
                      className="flex flex-col  gap-2 text-gray-500"
                    >
                      <div className=" py-1.5 lg:py-3 ">
                        <BiSolidQuoteRight className="text-[3rem] italic" />
                      </div>
                      <blockquote
                        className="text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem] font-heading text-black leading-[150%] italic"
                        dangerouslySetInnerHTML={{ __html: para }}
                      />
                    </div>
                  );
                }
                // Wrap other paragraphs with <p> tag
                return (
                  <p
                    key={index}
                    dangerouslySetInnerHTML={{ __html: para + "</p>" }}
                  />
                );
              })}
          </div> */}

          <div
            className="text-base blogBody text-gray-700 font-nuno space-y-4"
            dangerouslySetInnerHTML={{ __html: content?.rendered }}
          />
        </div>

        {/* Recent Posts Section */}
        <div className=" w-full md:w-1/5  font-dm">
          <h1 className="text-[1.2rem] font-dm mt-0 md:mt-6 mb-4">Recent Posts</h1>
          {recentPosts?.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
            {recentPosts.slice(0, 5).map((recentPost: any) => {
              const recentImage =
                recentPost?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                "";
              const recentCategories =
                recentPost?._embedded?.["wp:term"]?.[0]
                  ?.map((term: any) => term.name)
                  .join(", ") || "Uncategorized";
              const recentDate = new Date(recentPost.date).toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              );

              return (
                <div
                  key={recentPost.id}
                  className="bg-white flex items-center border-b pb-4 gap-4 md:gap-2"
                >
                  {/* Featured Image */}
                  <div className="w-1/3">
                    {recentImage && (
                      <Image
                        src={recentImage}
                        alt={recentPost.title.rendered}
                        className="w-full h-28 sm:h-32 md:h-20 object-cover"
                        width={100}
                        height={100}
                      />
                    )}
                  </div>

                  {/* Post Details */}
                  <div className=" w-2/3 ">
                    <p className=" font-paragraph text-[0.85rem] ">
                      {recentDate}
                    </p>
                    <h2 className="text-[1rem]  mt-1">
                      <Link
                        href={`/blog/${recentPost.slug}`}
                        className="hover:text-[#9e9f7f]"
                      >
                         {truncateTextByChars(recentPost.title.rendered || "", 35)}
                      </Link>
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
          ): (
            <div className=" text-[0.9rem] font-nuno ">
              <p>No recent post</p>
            </div>
          )}
        </div>
      </section>

      {/* hidden */}
      <div className="hidden">
{/* {
    "rendered": "\n<hr class=\"wp-block-separator has-alpha-channel-opacity\"/>\n\n\n\n<figure class=\"wp-block-image size-large\"><img loading=\"lazy\" decoding=\"async\" width=\"1024\" height=\"683\" src=\"https://dev-tritek.pantheonsite.io/wp-content/uploads/2025/01/Business-Analysis-Cert-Article-picture-1024x683.jpg\" alt=\"\" class=\"wp-image-33\" srcset=\"https://dev-tritek.pantheonsite.io/wp-content/uploads/2025/01/Business-Analysis-Cert-Article-picture-1024x683.jpg 1024w, https://dev-tritek.pantheonsite.io/wp-content/uploads/2025/01/Business-Analysis-Cert-Article-picture-300x200.jpg 300w, https://dev-tritek.pantheonsite.io/wp-content/uploads/2025/01/Business-Analysis-Cert-Article-picture-768x512.jpg 768w\" sizes=\"auto, (max-width: 1024px) 100vw, 1024px\" /><figcaption class=\"wp-element-caption\">A business analysis professional at work</figcaption></figure>\n\n\n\n<hr class=\"wp-block-separator has-alpha-channel-opacity\"/>\n\n\n<h2><strong>IIBA (International Institute of Business Analysis) Certifications</strong></h2>\n<p>The IIBA offers three certification levels, each targeting different career stages and delivering specific market advantages.</p>\n<ol>\n<li>\n<h3><strong>CBAP (Certified Business Analysis Professional)</strong></h3>\n</li>\n</ol>\n<p>At the pinnacle of BA certifications sits the CBAP, recognized as the gold standard by UK employers. This certification demands 7,500 hours of BA experience within the past decade, making it a true mark of professional excellence.</p>\n<p>The preparation journey typically spans 4-6 months, requiring deep immersion in the BABOK Guide and extensive practical application. CBAP holders consistently secure positions in the £65,000-£85,000 range, particularly in banking, insurance, and healthcare sectors.</p>\n<p>Major financial institutions like Barclays and HSBC specifically seek CBAP certification when recruiting for senior BA positions. The certification proves particularly valuable for roles involving strategic decision-making and team leadership.</p>\n<p>&nbsp;</p>\n<ol start=\"2\">\n<li>\n<h3><strong>CCBA (Certification of Capability in Business Analysis)</strong></h3>\n</li>\n</ol>\n<p>The CCBA serves as an intermediate milestone, perfect for BAs with 3,750 hours of experience. This certification validates your ability to handle complex projects independently while working toward senior positions.</p>\n<p>Preparation typically requires 3-4 months of focused study. CCBA holders command salaries between £50,000-£65,000, with strong demand in retail, manufacturing, and technology sectors. The certification particularly appeals to employers seeking BAs who can bridge technical and business requirements.</p>\n<p>&nbsp;</p>\n<ol start=\"3\">\n<li>\n<h3><strong>ECBA (Entry Certificate in Business Analysis)</strong></h3>\n</li>\n</ol>\n<p>For professionals starting their BA journey, the ECBA provides credible validation of fundamental knowledge. While requiring only 21 hours of formal training, successful candidates must demonstrate comprehensive understanding of BA principles and methodologies.</p>\n<p>Most candidates complete their preparation in 2-3 months. Starting salaries range from £35,000-£45,000, with rapid progression opportunities. The certification proves particularly valuable in organizations with structured career development programs.</p>\n\n\n<hr class=\"wp-block-separator has-alpha-channel-opacity\"/>\n\n\n<h2><strong>APMG Agile Business Analysis Certification</strong></h2>\n<p>The APMG certification pathway offers unique advantages in the UK market, particularly for public sector positions. The certification comprises two levels: Foundation and Practitioner.</p>\n<p>&nbsp;</p>\n<ol>\n<li>\n<h3><strong>Foundation Level</strong></h3>\n</li>\n</ol>\n<p>The Foundation certification establishes core BA competencies. The preparation period of 2-3 weeks focuses on essential techniques and methodologies. This certification particularly appeals to government agencies and public sector organizations, where structured approaches to business analysis are mandatory.</p>\n<ol start=\"2\">\n<li>\n<h3><strong>Practitioner Level</strong></h3>\n</li>\n</ol>\n<p>Building on the Foundation, the Practitioner level demands an additional 4 weeks of preparation. This advanced certification demonstrates your ability to apply BA techniques in complex organizational contexts. APMG-certified professionals typically earn between £45,000-£70,000, with particularly strong demand in public sector digital transformation projects.</p>\n\n\n<hr class=\"wp-block-separator has-alpha-channel-opacity\"/>\n\n\n<h2><strong>PMI-PBA (PMI Professional in Business Analysis)</strong></h2>\n<p>This certification particularly suits professionals working in industries where projects drive business change, such as construction, IT, and telecommunications. 
    PMI-PBA holders regularly secure positions in the £55,000-£75,000 range, with additional benefits like project bonuses.</p>\n\n\n<hr class=\"wp-block-separator has-alpha-channel-opacity\"/>\n\n\n<h2><strong>BCS International Diploma</strong></h2>\n<p>The BCS International Diploma takes a comprehensive approach through its modular structure. Over 6-12 months, candidates complete four modules, each focusing on critical BA competencies. This certification proves particularly valuable in financial services and consulting, where broad knowledge application is essential.</p>\n\n\n<hr class=\"wp-block-separator has-alpha-channel-opacity\"/>\n\n\n<h2><strong>Tritek&#8217;s Comprehensive Certification Support</strong></h2>\n<p>At Tritek Academy, we understand the certification journey&#8217;s complexities. Our 12-week intensive Elite Tech Training Programme incorporates:</p>\n<p><strong> </strong></p>\n<h3><strong>Practical Application</strong></h3>\n<p>Students work on real-world projects, applying certification concepts to actual business scenarios. This hands-on experience proves invaluable during certification exams and subsequent job applications.</p>\n<h3><strong>Mentorship Excellence</strong></h3>\n<p>Weekly sessions with industry mentors provide insights into certification requirements and real-world applications. Our mentors bring decades of combined experience, offering practical tips and examination strategies.</p>\n<h3><strong>Technical Mastery</strong></h3>\n<p>Beyond certification requirements, we ensure proficiency in essential BA tools:</p>\n<ul>\n<li>Jira for project tracking and requirement management</li>\n<li>Confluence for documentation and collaboration</li>\n<li>Visio for process modeling and visualization</li>\n</ul>\n<h3><strong>Market Recognition and Career Impact</strong></h3>\n<p>The impact of BA certifications on career progression extends far beyond simple qualification. Our market analysis shows certified Business Analysts experience 87% faster interview selection rates compared to non-certified peers. This statistic reflects employers&#8217; growing preference for validated expertise in an increasingly competitive market.</p>\n<p>UK organizations, particularly in financial services and technology sectors, use certifications as primary screening criteria. Major employers like Deutsche Bank, PwC, and NHS Digital explicitly mention these certifications in their job specifications, often linking them to higher pay grades and accelerated promotion paths.</p>\n<h3><strong>Salary Progression Patterns</strong></h3>\n<p>Certified BAs consistently command premium salaries, with the differential increasing at senior levels. Entry-level certified analysts typically start £5,000-£7,000 higher than non-certified counterparts. This gap widens to £12,000-£15,000 at senior levels, particularly for those holding multiple certifications.</p>\n<h3><strong>Project Leadership Opportunities</strong></h3>\n<p>Organizations increasingly reserve strategic projects for certified BAs. Our employment data shows 79% of certified analysts lead major transformation initiatives within their first year, compared to 45% of non-certified analysts. This leadership exposure accelerates career progression and builds crucial senior management capabilities.</p>\n\n\n<hr class=\"wp-block-separator has-alpha-channel-opacity\"/>\n\n\n<h2><strong>Preparation Excellence at Tritek</strong></h2>\n<p>Our certification preparation program stands out through its multi-faceted approach to learning and practical application.</p>\n<h3><strong>Comprehensive Knowledge Base</strong></h3>\n<p>Students access our Tritek digital library containing:</p>\n<ul>\n<li>Latest study guide materials</li>\n<li>Industry-specific case studies</li>\n<li>Practice examination papers</li>\n<li>Video tutorials</li>\n<li>Process modeling templates</li>\n<li>Requirements documentation examples</li>\n</ul>\n<h3><strong>Interactive Learning Experience</strong></h3>\n<p>Weekly classes and knowledge-sharing sessions bring certification concepts to life through:</p>\n<ul>\n<li>Real project scenarios</li>\n<li>Industry expert guest speakers</li>\n<li>Group problem-solving exercises</li>\n<li>Certification exam strategies</li>\n<li>Career progression planning</li>\n</ul>\n<h3><strong>Career Development Support</strong></h3>\n<p>Our career coaches provide specialized guidance:</p>\n<ul>\n<li>Certification-specific CV optimization</li>\n<li>Interview preparation focusing on certification topics</li>\n<li>LinkedIn profile enhancement</li>\n<li>Professional network-building strategies</li>\n<li>Salary negotiation techniques</li>\n</ul>\n<h3><strong>Starting Your Certification Journey</strong></h3>\n<p>The path to BA certification success requires careful planning and expert guidance. Our career strategists help you:</p>\n<ul>\n<li>Assess your current qualifications</li>\n<li>Choose the most beneficial certification path</li>\n<li>Create a realistic study timeline</li>\n<li>Develop a practical preparation strategy</li>\n<li>Plan your career progression</li>\n</ul>\n<h3><strong>Take Action Today</strong></h3>\n<p>Your journey toward BA certification excellence starts with a simple step. Book a free consultation with our career strategists to:</p>\n<ul>\n<li>Evaluate your certification options</li>\n<li>Understand preparation requirements</li>\n<li>Learn about financing options</li>\n<li>Explore career opportunities</li>\n<li>Create your personalized success plan</li>\n</ul>\n\n\n<div class=\"wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex\">\n<div class=\"wp-block-button has-custom-width wp-block-button__width-100 has-custom-font-size is-style-fill has-x-large-font-size\"><a class=\"wp-block-button__link has-base-color has-accent-3-background-color has-text-color has-background has-link-color has-text-align-center wp-element-button\" href=\"https://www.tritekacademy.co.uk/contact\" style=\"padding-top:var(--wp--preset--spacing--20);padding-bottom:var(--wp--preset--spacing--20)\"><strong>Book Your Free Career Strategy Call</strong></a></div>\n</div>\n\n\n<p style=\"text-align: left;\">Transform your Business Analysis career through professional certification. Let Tritek Academy guide you to success.</p>",
    "protected": false
} */}
      </div>
    </div>
  );
}
