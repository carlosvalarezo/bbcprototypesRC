/**
 * Created by carlos-valarezo on 02/05/2016.
 */
var React = require('react');
import Story from './Story';

var StoryContainer = React.createClass({

    render:function()
    {
        var stories = this.props.stories.map((story) =>
        {
            return (this.props.id === "type-a-top-story-1")
                ?
                <div className={this.props.id + "-container"}>
                    <Story id={this.props.id} story={story.items} key={story.title}/>
                </div>
                :
                ((this.props.id === "type-a-story-1")
                        ?
                        <div className={this.props.id + "-container"}>
                            <Story id={this.props.id} story={story.items} key={story.title}/>
                        </div>
                        :
                        <div className={this.props.id + "-container"}>
                            <Story id={this.props.id} story={story.items} key={story.title}/>
                        </div>
                )
        });
        return(
             <div>
                 {stories}
            </div>
        );

    }
});

export default StoryContainer;
