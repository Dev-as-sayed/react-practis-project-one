import Membership from "./Membership";

const GymComponent = () => {

    const gymMembershipOptions = [
        {
          id: 1,
          optionName: "Starter Pack",
          features: [
            "Access to gym equipment",
            "Locker room access",
            "Basic fitness assessment",
            "Unlimited water and towel service",
            "Access to fitness classes (limited)",
            "Discounted personal training sessions",
            "Fitness tracking app access"
          ],
          price: "$29.99/month"
        },
        {
          id: 2,
          optionName: "FitPlus",
          features: [
            "All Starter Pack features",
            "Access to group fitness classes",
            "Personalized workout plans",
            "Nutrition consultation",
            "Access to premium fitness classes",
            "Monthly body composition analysis",
            "Exclusive fitness workshops"
          ],
          price: "$49.99/month"
        },
        {
          id: 3,
          optionName: "Ultimate Fitness",
          features: [
            "All FitPlus features",
            "Priority access to equipment",
            "Private training sessions (2/month)",
            "Sauna and spa access",
            "Unlimited fitness classes",
            "Quarterly fitness assessments",
            "VIP locker room access"
          ],
          price: "$79.99/month"
        },
        {
          id: 4,
          optionName: "Family Membership",
          features: [
            "Access for 2 adults and 2 children",
            "Access to gym equipment",
            "Locker room access",
            "Basic fitness assessment",
            "Unlimited water and towel service",
            "Access to family fitness classes",
            "Family nutrition consultation",
            "Discounted family personal training sessions"
          ],
          price: "$99.99/month"
        }
      ];
      

    return (
        <div className="mt-24 md:grid grid-cols-4 gap-3">
            {
                gymMembershipOptions.map( types => <Membership
                    key={types.id}
                    types={types}
                ></Membership>)
            }
        </div>
    );
};

export default GymComponent;