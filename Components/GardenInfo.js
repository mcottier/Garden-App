import React, { Component } from "react";
import { ScrollView, Text, FlatList } from "react-native";
import { Card, ListItem } from "react-native-elements";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import Loading from "./LoadingComponent";
import * as Animatable from "react-native-animatable";

const mapStateToProps = (state) => {
  return {
    partners: state.partners,
  };
};

function Mission() {
  return (
    <Card title="Mission">
      <Text style={{ margin: 10 }}>
        The goal is to bring the community together to receive produce and learn
        how to reap the benefits of the work put into it. All the garden needs
        is some helping hands, willing hearts, and a love for the outdoors. You
        do not need to know anything about gardening to be a part of this
        community garden. We are happy to have anyone that would like to be
        involved!
      </Text>
    </Card>
  );
}

class About extends Component {
  static navigationOptions = {
    title: "About Us",
  };

  render() {
    const renderPartner = ({ item }) => {
      return (
        <ListItem
          title={item.name}
          subtitle={item.description}
          leftAvatar={{ source: { uri: baseUrl + item.image } }}
        />
      );
    };

    if (this.props.partners.isLoading) {
      return (
        <ScrollView>
          <Mission />
          <Card title="Our Mission">
            <Loading />
          </Card>
        </ScrollView>
      );
    }
    if (this.props.partners.errMess) {
      return (
        <ScrollView>
          <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
            <Mission />
            <Card title="Our Mission">
              <Text>{this.props.partners.errMess}</Text>
            </Card>
          </Animatable.View>
        </ScrollView>
      );
    }
    return (
      <ScrollView>
        <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
          <Mission />
          <Card title="Our Mission">
            <FlatList
              data={this.props.partners.partners}
              renderItem={renderPartner}
              keyExtractor={(item) => item.id.toString()}
            />
          </Card>
        </Animatable.View>
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps)(GardenInfo);
