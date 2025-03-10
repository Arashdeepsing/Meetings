<h1> Meetings Project Documentation </h1>

https://meetings-mauve.vercel.app/

<h2> Overview </h2>

<p> The Meetings application is a web-based platform that enables users to host, schedule, and manage virtual meetings with ease. It provides authentication via third-party providers, real-time meeting capabilities, scheduling features, meeting history access, and recording functionality.</p>

<h2> Features </h2>
<h3> Authentication </h3>
<ul>
<ul>
<li>Google account</li>
<li>GitHub account</li>
<li>Apple account</li>
</ul>
<li>Authentication is handled securely via Clerk API</li>
</ul>
<h3> User Features</h3>
<h4>New Meetings</h4>
<ul><li>Users can initiate instant meetings.</li>
<li>
The application generates a shareable URL for others to join in real-time.</li>
</ul>

<h3>Scheduled Meetings</h4>
<ul>
<li>Users can schedule meetings for a future date and time.</li>

<li>The system provides a unique URL for scheduled meetings.</li>

<li>Participants can join using the shared URL.</li>
</ul>
<h4>Meeting History</h4>
<ul>
<li>Users can access their past meetings.</li>

<li>Meeting records include timestamps and details.</li>
</ul>
<h4>Meeting Recordings</h4>
<ul>
<li> Users can record their meetings.</li>

<li> Recordings are stored and accessible for later viewing.</li>
</ul>

<h2>Usage Guide</h2>
<ul>
<li>Authentication: Sign in using Google, GitHub, or Apple.</li>

<li>Starting a Meeting: Click "Start Meeting" to create an instant meeting and share the link.</li>

<li>Scheduling a Meeting: Use the scheduling feature to set up future meetings.</li>

<li>Accessing Past Meetings: Navigate to "Meeting History" for past records.</li>

<li>Recording Meetings: Enable recording during meetings and access saved recordings later.</li>
</ul>

<h2>Technologies Used </h2>
<ul>
<li><b>Next.js</b> - Framework for React applications.</li>

<li><b>TypeScript</b> - Strongly typed JavaScript.</li>

<li><b>Tailwind CSS</b> - Styling framework.</li>

<li><b>Clerk API</b> - Authentication management.</li>

<li><b>MongoDB</b>  - Database (depending on configuration).</li>

</ul>
