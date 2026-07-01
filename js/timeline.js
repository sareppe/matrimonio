/* ================================================= */
/* TIMELINE ACTIVE STATE */
/* ================================================= */

const timelineItems =
  document.querySelectorAll(".timeline-item");

const timelineObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if(entry.isIntersecting){
          entry.target.classList.add("active");
        }

      });

    },
    {
      threshold:.25
    }
  );

timelineItems.forEach(item => {
  timelineObserver.observe(item);
});