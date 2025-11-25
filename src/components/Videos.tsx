import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Play } from "lucide-react";

const Videos = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Placeholder YouTube video IDs - replace these with actual video IDs
  const videos = [
    {
      id: "dQw4w9WgXcQ",
      title: "Balcony Garden Setup - Complete Guide",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Growing Vegetables in Small Spaces",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Harvest Time - Fresh Organic Produce",
    },
  ];

  return (
    <section id="videos" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Play className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Watch Our Work</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            See Kitchen Gardens in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch how we transform ordinary balconies into thriving mini-farms. 
            Real projects, real results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden bg-muted shadow-lg hover:shadow-xl transition-shadow duration-300">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold group-hover:text-primary transition-colors">
                {video.title}
              </h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            
          </p>
        </motion.div>
      </div>
    </section>
  );
  
};

export default Videos;
