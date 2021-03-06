/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const PropTypes = require('prop-types');
const Message = require('../../components/I18N/Message');
const {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    FacebookShareCount,
    FacebookIcon,
    TwitterIcon,
    GooglePlusIcon,
    LinkedinIcon
} = require('react-share');
require('./share.css');


class ShareSocials extends React.Component {
    static propTypes = {
        shareUrl: PropTypes.string,
         getCount: PropTypes.func,
         shareTitle: PropTypes.string
    }
    static defaultProps = {
        shareTitle: 'GeoSolutions'
    }
    render() {
        let countProps = {};
        if (this.props.getCount) {
            countProps.getCount = this.props.getCount;
        }
        const title = this.props.shareTitle;

        return (
            <div className="social-links">

                <h4>
                    <Message msgId="share.socialIntro"/>
                </h4>

                <div className="social-box facebook">
                <FacebookShareButton
                    url={this.props.shareUrl}
                    quote={title}
                    className="share-facebook">
                    <FacebookIcon
                    size={32}
                    round />
                </FacebookShareButton>
                <FacebookShareCount
                    url={this.props.shareUrl}
                    {...countProps}
                    className="share-facebook-count">
                    {count => count}
                </FacebookShareCount>
                </div>

                <div className="social-box twitter">
                    <TwitterShareButton
                    url={this.props.shareUrl}
                    title={title}
                    className="share-twitter">
                    <TwitterIcon
                        size={32}
                        round />
                    </TwitterShareButton>
                    <div className="share-twitter-count">
                    &nbsp;
                    </div>
                </div>

                <div className="social-box linkedin">
                    <LinkedinShareButton
                    url={this.props.shareUrl}
                    title={title}
                    className="share-linkedin-count">
                    <LinkedinIcon
                        size={32}
                        round />
                    </LinkedinShareButton>
                    <div className="linkedin-twitter-count">
                    &nbsp;
                    </div>
                </div>
        </div>
        );
    }
};

module.exports = ShareSocials;
