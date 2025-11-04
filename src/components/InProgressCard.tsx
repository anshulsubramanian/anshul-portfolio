interface InProgressCardProps {
  title: string;
  description: string;
}

const InProgressCard = ({ title, description }: InProgressCardProps) => {
  return (
    <div className="bg-card border border-border rounded-xl p-8 hover:border-secondary/30 transition-all group">
      <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-secondary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default InProgressCard;
