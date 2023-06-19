# Agile Development

__What does it mean agile development, the agile manifesto, the agile principles?__

Agile development is a software development approach that emphasizes flexibility, collaboration, and iterative progress. It is a way of working that allows software teams to respond quickly to changes and deliver working software more frequently and efficiently.  

The Agile Manifesto is a set of guiding principles for Agile software development that were created in 2001 by a group of software development practitioners who were looking for a more flexible and collaborative approach to software development. The Manifesto consists of four values and twelve principles that prioritize individuals and interactions, working software, customer collaboration, and response to change. 

The Agile Manifesto is based on four core values that prioritize the following: 

1. Individuals and interactions over processes and tools: This value emphasizes the importance of people and their ability to collaborate and communicate effectively, rather than relying solely on processes and tools. 

2. Working software over comprehensive documentation: This value emphasizes the importance of delivering working software that meets the customer's needs, rather than focusing on extensive documentation that may not be necessary. 

3. Customer collaboration over contract negotiation: This value emphasizes the importance of collaborating with the customer throughout the development process to ensure that the software being developed meets their needs and is aligned with their goals. 

4. Responding to change over following a plan: This value emphasizes the importance of being flexible and adaptable to changing circumstances and requirements, rather than sticking to a rigid plan that may no longer be relevant or effective. 

__Which agile methods exist and which are most popular__

Scrum, Kanban and Lean are popular agile methods.  

__Can you explain Scrum in full details, as it is by the book?__

## Scrum Principles

1. **Empirical Process Control**: Embrace the fact that knowledge emerges through experience and make decisions based on observations and feedback.
2. **Self-Organization**: Encourage the team to self-organize and collaborate to deliver value.
3. **Iterative and Incremental Delivery**: Break the project into small, manageable iterations or sprints to deliver value incrementally.
4. **Collaboration**: Foster open communication and collaboration between the Scrum team, stakeholders, and customers.

## Scrum Steps

1. **Product Backlog**: Create and maintain a prioritized list of all desired features, enhancements, and bug fixes called the Product Backlog.

2. **Sprint Planning**: Select a set of items from the Product Backlog for the upcoming Sprint. Collaboratively define the Sprint Goal and create a Sprint Backlog, which includes tasks necessary to deliver the selected items.

3. **Sprint**: Execute the Sprint by working on the tasks defined in the Sprint Backlog. The team holds daily stand-up meetings to synchronize and discuss progress, challenges, and adaptations.

4. **Sprint Review**: At the end of the Sprint, hold a Sprint Review meeting to demonstrate the completed work to stakeholders and gather feedback.

5. **Sprint Retrospective**: Conduct a Sprint Retrospective meeting where the team reflects on the Sprint, identifies areas for improvement, and defines actions to enhance future Sprints.

6. **Repeat**: Repeat the Sprint cycle by conducting subsequent Sprints, refining the Product Backlog, and continuously delivering value in incremental iterations.

7. **Release**: When the Product Owner determines that the product has reached a sufficient level of quality and value, a release may be planned to deliver the product increment to customers.

8. **Monitor and Adapt**: Continuously monitor progress, gather feedback, and adapt the product, backlog, and processes to optimize value delivery.

__Can you explain two more agile methods and name a number of interesting features in them different from Scrum?__

__Kanban:__ 

 Kanban is an approach to project management and workflow visualization that originated from lean manufacturing principles. It helps teams improve efficiency, productivity, and transparency by visualizing work and limiting work in progress. Here are the key steps involved in implementing Kanban:

1. Visualize the Workflow: The first step in Kanban is to create a visual representation of your workflow. This can be done using a Kanban board, which typically consists of columns representing different stages of work, such as "To Do," "In Progress," and "Done." Each work item is represented by a card or sticky note.

2. Limit Work in Progress (WIP): One of the fundamental principles of Kanban is to limit the number of tasks or work items that can be in progress at any given time. This helps prevent overloading the team and promotes a smooth flow of work.

3. Define Work Item Types: Categorize your work items into different types or classes. For example, you could have user stories, bugs, or new features. Assign unique attributes and characteristics to each type to provide more context.

4. Set Work-in-Progress Limits: Determine the maximum number of work items that can be in progress at each stage of your workflow. These limits prevent bottlenecks and encourage better focus and collaboration.

5. Visualize Work Items: Place work items on the Kanban board, starting from the "To Do" column. As work progresses, move items across the columns to reflect their current status. This visual representation helps team members understand the overall workflow and individual responsibilities.

6. Manage Flow and Pull System: Kanban operates on a "pull" system, where team members pull work from the previous stage when they have capacity. This approach avoids overburdening team members and promotes a smooth, continuous flow of work.

7. Measure and Optimize: Continuously monitor the flow of work, collect relevant metrics, and analyze them to identify areas for improvement. Metrics such as cycle time (time taken to complete a work item) and throughput (number of items completed over a period) can provide valuable insights.

8. Collaborate and Improve: Encourage collaboration and transparency within the team. Regularly review the Kanban board together, identify bottlenecks, and discuss potential improvements. Continuously adapt and refine your Kanban system based on feedback and lessons learned.

__Lean:__ 

## Lean Principles

1. **Value**: Focus on understanding and delivering customer value.
2. **Value Stream**: Identify and analyze the end-to-end value stream to eliminate waste and improve efficiency.
3. **Flow**: Strive to create a smooth and continuous flow of work, minimizing interruptions and delays.
4. **Pull**: Implement a pull system where work is pulled based on customer demand, reducing overproduction.
5. **Perfection**: Continuously seek perfection by relentlessly improving processes and eliminating waste.

## Lean Steps

1. **Identify Value**: Identify the specific value that customers expect from your products or services. Understand what they are willing to pay for and what differentiates your offerings.

2. **Map the Value Stream**: Map the end-to-end value stream, including all the steps and processes involved in delivering the product or service. This helps identify non-value-added activities and areas for improvement.

3. **Create Flow**: Analyze the value stream and remove any bottlenecks or obstacles that hinder the flow of work. Optimize the sequence of activities and streamline processes to achieve a smooth flow.

4. **Implement Pull**: Implement a pull system where work is pulled based on customer demand. This means producing or delivering items only when requested, minimizing overproduction and reducing inventory.

5. **Seek Perfection**: Continuously strive for perfection by relentlessly improving processes, eliminating waste, and engaging all team members in the pursuit of excellence.

__Do you know how software engineers work in practice with agile methods? (to answer this question, we advise that you arrange a visit to a company)__

De Volksbank works with Kanban boards to work on their IT-solutions. Multiple teams work on multiple problems, so they need tools to help organize their progress and status. They use for example Azure DevOps to monitor their boards.

__Which agile management tool would you recommend for use in your project and why?__ 

We are currently using Trello for our kanban board, a physical board would work as well. Kanban works quite well for our team. Some other tools are Jira and Azure DevOps. Git also allows to manage a primitive kanban board. Trello does not allow for full Kanban and or Scrum. Things like a burndown chart and user stories are missing in the tool.