import { Send, Mail } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        {/* Header */}
        <header className="mb-12">
          <div className="flex justify-between items-start mb-1">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Kirill Grigoriev
            </h1>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://t.me/cantstopwantstop" 
                target="_blank" 
                rel="noopener noreferrer"
                className="telegram-icon"
                aria-label="Telegram"
              >
                <Send className="h-4 w-4" />
              </a>
              <a 
                href="mailto:kirillgrigoriev@yahoo.com"
                className="text-foreground hover:text-muted-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <p className="text-base tracking-wide text-muted-foreground mt-3">
            Technical Specialist
          </p>
        </header>

        {/* About */}
        <section className="mb-12">
          <p className="text-foreground leading-relaxed">
            Technical specialist with experience in building and supporting business systems, automation, and IT infrastructure. Able to independently find solutions to technical and process-related problems, quickly learn and implement new tools, and adapt to different project requirements. Strong background in websites, CRM integrations, Telegram bots, and no-code/low-code automation, with a practical approach to system reliability, data accuracy, and operational stability. Focused on creating simple, maintainable, and scalable technical solutions that support everyday business operations.
          </p>
        </section>

        {/* Tools */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-6 pb-2 border-b border-border">
            Tools & Technologies
          </h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <ul className="list-disc list-inside space-y-1 text-foreground text-sm">
              <li><span className="font-medium">Automation & Integration:</span> n8n, Albato, webhook-based integrations, REST APIs</li>
              <li><span className="font-medium">CRM Systems:</span> AmoCRM, custom CRM solutions</li>
              <li><span className="font-medium">Analytics & Tracking:</span> Google Analytics (GA4), UTM tagging, Meta Pixel, Google Ads Pixel, Yandex Metrica</li>
              <li><span className="font-medium">Websites & CMS:</span> CMS-based websites, marketing and lead generation platforms, form integrations</li>
              <li><span className="font-medium">Messaging & Bots:</span> Telegram Bots (Python), WhatsApp Business, Instagram integrations</li>
              <li><span className="font-medium">Programming & Scripting:</span> Python, basic SQL, JSON, API integrations</li>
              <li><span className="font-medium">Advertising & Media Tools:</span> Meta Ads Manager, YouTube Studio, OBS Studio, Kinescope</li>
              <li><span className="font-medium">IT & Infrastructure:</span> Google Workspace, SaaS administration, VPN, Wi-Fi networks, routers, basic network setup</li>
              <li><span className="font-medium">Security:</span> MFA, access control, role-based permissions, basic data protection practices</li>
              <li><span className="font-medium">Dev & Ops:</span> Git (basic), server configuration basics, backups and monitoring</li>
              <li><span className="font-medium">Payments:</span> Payment gateways integration, transaction monitoring</li>
            </ul>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-6 pb-2 border-b border-border">
            Work Experience
          </h2>

          <div className="space-y-8">
            {/* Position 1 */}
            <article>
              <h3 className="font-extrabold text-foreground">
                Freelance
              </h3>
              <p className="text-sm text-muted-foreground mb-3">July 2025 - Present</p>
              <div className="space-y-4 text-foreground leading-relaxed">
                <ul className="list-disc list-inside space-y-1 text-foreground text-sm">
                  <li>Developed and maintained websites and lead generation platforms, including basic SEO setup and optimization.</li>
                  <li>Implemented CRM integrations according to client needs, connecting websites, messengers, and email services.</li>
                  <li>Built and supported Telegram bots for simple marketing and service scenarios, using both Python and automation platforms.</li>
                  <li>Set up automation workflows with n8n and similar tools to reduce manual work and improve data flow between systems.</li>
                  <li>Configured basic analytics and conversion tracking (UTM tags, pixels, web analytics).</li>
                </ul>
              </div>
            </article>

            {/* Position 2 */}
            <article>
              <h3 className="font-extrabold text-foreground">
                Technical Lead Specialist
              </h3>
              <p className="text-sm text-muted-foreground mb-3">June 2023 - July 2025</p>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p className="text-sm">
                  Worked closely with the marketing team on building and developing the company's marketing systems, CRM, analytics, automation, SaaS tools, and internal IT infrastructure, supporting the project's technical growth from launch to over 20,000 active users while ensuring system stability and data accuracy.
                </p>
                
                <div>
                  <p className="font-medium mb-1">Built and led a technical team (3 people):</p>
                  <ul className="list-disc list-inside space-y-1 text-foreground text-sm">
                    <li>Designed task management processes, internal standards, and documentation.</li>
                    <li>Created onboarding materials and operational guidelines.</li>
                    <li>Automated workflows for website content publishing and Telegram channels.</li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium mb-1">Developed and maintained marketing websites and lead generation platforms (CMS-based):</p>
                  <ul className="list-disc list-inside space-y-1 text-foreground text-sm">
                    <li>Multi-domain structure management.</li>
                    <li>Integration with payment systems, CRM, messengers, and marketing services.</li>
                    <li>SEO optimization and performance improvements.</li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium mb-1">Implemented end-to-end marketing analytics and attribution:</p>
                  <ul className="list-disc list-inside space-y-1 text-foreground text-sm">
                    <li>UTM tagging strategy and attribution logic.</li>
                    <li>Installation and maintenance of advertising pixels (Meta, Google).</li>
                    <li>Configuration of Google Analytics / GA4 and equivalent tools.</li>
                    <li>Ensured data consistency between analytics platforms and CRM.</li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium mb-1">Designed and implemented CRM system (AmoCRM) from scratch:</p>
                  <ul className="list-disc list-inside space-y-1 text-foreground text-sm">
                    <li>Sales funnel architecture tightly integrated with marketing activities.</li>
                    <li>Automation of lead processing, messaging, task creation, payments, and call tracking.</li>
                    <li>Integration with websites, Telegram bots, messengers, and advertising platforms.</li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium mb-1">Built complex automation workflows using n8n, BotHelp, SaleBot:</p>
                  <ul className="list-disc list-inside space-y-1 text-foreground text-sm">
                    <li>CRM, Websites, Telegram bots, Payment systems, Email services.</li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium mb-1">Managed digital marketing technical stack:</p>
                  <ul className="list-disc list-inside space-y-1 text-foreground text-sm">
                    <li>Advertising infrastructure for Meta Ads and conversion tracking.</li>
                    <li>Video marketing pipelines using YouTube Studio, Kinescope, and OBS Studio.</li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium mb-1">Administered internal IT systems and network infrastructure:</p>
                  <ul className="list-disc list-inside space-y-1 text-foreground text-sm">
                    <li>Office and remote network setup (routers, Wi-Fi, VPN).</li>
                    <li>Equipment selection and procurement based on budget and technical requirements.</li>
                    <li>Data backup strategies and basic security practices (MFA, access control, least privilege).</li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium mb-1">Administered SaaS systems:</p>
                  <ul className="list-disc list-inside space-y-1 text-foreground text-sm">
                    <li>CRM, corporate email, messengers, websites, task trackers, and marketing platforms.</li>
                    <li>User access and role management.</li>
                    <li>1st and 2nd line technical support.</li>
                  </ul>
                </div>
              </div>
            </article>

            {/* Position 3 */}
            <article>
              <h3 className="font-extrabold text-foreground">
                Technical-Compliance Specialist
              </h3>
              <p className="text-sm text-muted-foreground mb-3">June 2022 - May 2023</p>
              <div className="space-y-4 text-foreground leading-relaxed">
                <div>
                  <p className="font-medium mb-1">Integrated and maintained payment systems:</p>
                  <ul className="list-disc list-inside space-y-1 text-foreground text-sm">
                    <li>User verification workflows.</li>
                    <li>Monitoring and detection of suspicious transactions.</li>
                    <li>Transaction stability and reliability.</li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium mb-1">Administered corporate SaaS and IT access management:</p>
                  <ul className="list-disc list-inside space-y-1 text-foreground text-sm">
                    <li>Configuration and security of corporate email services.</li>
                    <li>User account creation, access rights, and role management.</li>
                    <li>Application of basic information security principles (account protection, access control, MFA).</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-6 border-t border-border">
          <div className="flex justify-center items-center gap-4">
            <a 
              href="https://t.me/cantstopwantstop" 
              target="_blank" 
              rel="noopener noreferrer"
              className="telegram-icon"
              aria-label="Telegram"
            >
              <Send className="h-4 w-4" />
            </a>
            <a 
              href="mailto:kirillgrigoriev@yahoo.com"
              className="text-foreground hover:text-muted-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </footer>
      </div>
    </main>
  )
}
